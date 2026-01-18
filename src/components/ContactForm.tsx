"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface FormData {
  name: string;
  phone: string;
  email: string;
  lesson: string;
  website: string; // honeypot (скрытое поле)
}

export default function ContactForm(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    lesson: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Заявка отправлена!");
        setFormData({ name: "", phone: "", email: "", lesson: "", website: "" });
      } else {
        const data: unknown = await res.json().catch(() => null);
        const message =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error?: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Ошибка отправки. Попробуйте еще раз";
        setError(message);
      }
    } catch {
      setError("Ошибка сети. Проверьте подключение");
    }

    setIsSubmitting(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
        Записаться на пробное занятие
      </h3>
      {/* honeypot: скрытое поле против спам-ботов */}
      <div className="hidden" aria-hidden>
        <Input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Ваш сайт"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ваше имя"
        required
        aria-label="Имя"
      />

      <Input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        required
        aria-label="Телефон"
      />

      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        aria-label="Email"
      />

      <Button type="submit" disabled={isSubmitting} variant="primary">
        {isSubmitting ? "Отправляется..." : "Записаться"}
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
