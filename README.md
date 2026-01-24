## Uchkot

Сайт на **Next.js** (App Router).

### Локальный запуск

1) Установить зависимости:

```bash
npm install
```

2) Запустить dev-сервер:

```bash
npm run dev
```

Открой `http://localhost:3000`.

### Сборка (prod)

```bash
npm run build
npm run start
```

### Заявка с сайта → Telegram

Форма отправляет данные на `POST /api/contact`.

Чтобы включить уведомления в Telegram, задай переменные окружения:
- `TG_BOT_TOKEN` — токен бота (выдаёт `@BotFather`)
- `TG_CHAT_ID` — id чата/группы, куда слать сообщения

Как получить `TG_CHAT_ID` (самый простой способ):
1) Напиши боту в Telegram (Start → любое сообщение)
2) Открой в браузере:
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
3) В ответе найди `chat.id`

### Деплой на Amvera (через GitHub)

1) Запушь проект в GitHub.
2) В Amvera создай приложение (тип: **Приложение**).
3) Подключи GitHub репозиторий (может попросить `github_pat_...` токен).
4) Убедись, что в репозитории есть `amvera.yaml` (лежит в корне проекта).
5) В Amvera добавь переменные окружения (`TG_BOT_TOKEN`, `TG_CHAT_ID`), если нужны.
