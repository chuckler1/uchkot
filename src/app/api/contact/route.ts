import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  lesson?: string;
  /**
   * Honeypot-поле от ботов. На фронте оно скрыто.
   * Если поле заполнено — считаем это спамом.
   */
  website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimit = new Map<string, RateLimitEntry>();

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function normalizePhone(phone: string): string {
  // Оставляем только цифры и ведущий плюс.
  const trimmed = phone.trim();
  const hasPlus = trimmed.startsWith("+");
  const digitsOnly = trimmed.replace(/[^\d]/g, "");
  return (hasPlus ? "+" : "") + digitsOnly;
}

function isEmailValid(email: string): boolean {
  // Простая проверка email. Для формы этого достаточно.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendTelegramMessage(params: {
  token: string;
  chatId: string;
  text: string;
  timeoutMs?: number;
}): Promise<void> {
  const { token, chatId, text, timeoutMs = 5000 } = params;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Telegram sendMessage failed: ${res.status} ${res.statusText} ${body}`);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

function rateLimitCheck(key: string): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const existing = rateLimit.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfterSec: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { ok: true };
}

export async function POST(req: NextRequest) {
  // Простая защита от кросс-сайтовых POST-запросов (проверяем Origin).
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch {
      // Если Origin не похож на URL — просто пропускаем проверку.
    }
  }

  const ip = getClientIp(req);
  const rl = rateLimitCheck(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Слишком много запросов. Попробуйте позже." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  // Honeypot: если поле заполнено, отвечаем OK и не обрабатываем заявку.
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = String(payload.name ?? "").trim();
  const phone = normalizePhone(String(payload.phone ?? ""));
  const email = payload.email ? String(payload.email).trim() : "";
  const lesson = payload.lesson ? String(payload.lesson).trim() : "";

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ error: "Укажите имя (2–80 символов)" }, { status: 400 });
  }

  // В телефоне должно быть минимум 6 цифр и максимум 20 символов (с плюсиком).
  if (phone.replace(/[^\d]/g, "").length < 6 || phone.length > 20) {
    return NextResponse.json({ error: "Укажите корректный телефон" }, { status: 400 });
  }

  if (email && !isEmailValid(email)) {
    return NextResponse.json({ error: "Укажите корректный email" }, { status: 400 });
  }

  // Здесь можно отправлять заявку в Telegram/CRM/почту/БД.
  // Пока просто пишем в лог.
  console.log("[contact] new lead", {
    name,
    phone,
    email: email || undefined,
    lesson: lesson || undefined,
    ip,
    ts: new Date().toLocaleString(),
  });

  // Telegram-уведомление. Работает, если заданы переменные окружения.
  // TG_BOT_TOKEN=...
  // TG_CHAT_ID=...
  const tgToken = process.env.TG_BOT_TOKEN;
  const tgChatId = process.env.TG_CHAT_ID;
  if (tgToken && tgChatId) {
    try {
      const ts = new Date().toLocaleString();
      const text = [
        "Новая заявка с сайта:",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        email ? `Email: ${email}` : null,
        lesson ? `Занятие: ${lesson}` : null,
        `IP: ${ip}`,
        `Время: ${ts}`,
      ]
        .filter(Boolean)
        .join("\n");

      await sendTelegramMessage({ token: tgToken, chatId: tgChatId, text });
    } catch (e) {
      console.error("[contact] telegram send failed", e);
      // Не валим заявку, если Telegram упал. Просто логируем ошибку.
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

