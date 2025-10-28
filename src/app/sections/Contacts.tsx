"use client";

import { Phone, Mail, MapPin, Copy, Clock } from "lucide-react";
import { phoneNumbers, emailAddress, address, openingHours } from "@/data/contacts";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="container mx-auto max-w-5xl flex flex-col gap-6 p-6 my-14"
    >
      <div className="w-fit bg-[var(--foreground)]/5 rounded-full px-4 py-2">
        <p className="text-s font-bold text-[var(--foreground)]">Контакты</p>
      </div>
      <h2 className="text-4xl font-bold text-[var(--secondary)] leading-tight">
        Свяжитесь с нами
      </h2>
      <p className="text-lg font-light text-[var(--secondary)] leading-relaxed">
        Готовы ответить на все ваши вопросы и записать вашего ребенка на пробное
        занятие
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-5 bg-white/80 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-[var(--foreground)]/10 text-[var(--foreground)] rounded-xl p-3 flex-shrink-0">
              <Phone aria-hidden className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                Телефон
              </h3>
              <ul className="space-y-1" role="list">
                {phoneNumbers.map((phone) => (
                  <li key={phone} role="listitem" className="flex items-center gap-2">
                    <a
                      href={`tel:${phone.replace(/[^+\\d]/g, "")}`}
                      className="text-sm text-[var(--secondary)] hover:text-[var(--foreground)] underline-offset-2 hover:underline transition-colors"
                      aria-label={`Позвонить по номеру ${phone}`}
                    >
                      {phone}
                    </a>
                    <button
                      type="button"
                      aria-label={`Скопировать номер ${phone}`}
                      className="p-1 rounded hover:bg-[var(--foreground)]/10 transition-colors group"
                      onClick={() => navigator.clipboard.writeText(phone)}
                      title="Скопировать"
                    >
                      <Copy className="w-4 h-4 text-[var(--secondary)] group-hover:text-[var(--foreground)] transition-colors" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white/80 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-[var(--foreground)]/10 text-[var(--foreground)] rounded-xl p-3 flex-shrink-0">
              <Mail aria-hidden className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                Email
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm text-[var(--secondary)] hover:text-[var(--foreground)] underline-offset-2 hover:underline transition-colors"
                  aria-label={`Написать на адрес ${emailAddress}`}
                  rel="nofollow noopener"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  aria-label="Скопировать email"
                  className="p-1 rounded hover:bg-[var(--foreground)]/10 transition-colors group"
                  onClick={() => navigator.clipboard.writeText(emailAddress)}
                  title="Скопировать"
                >
                  <Copy className="w-4 h-4 text-[var(--secondary)] group-hover:text-[var(--foreground)] transition-colors" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white/80 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-[var(--foreground)]/10 text-[var(--foreground)] rounded-xl p-3 flex-shrink-0">
              <MapPin aria-hidden className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                Адрес
              </h3>
              <p className="text-sm text-[var(--secondary)]">{address}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[var(--foreground)]/10 text-[var(--foreground)] rounded-xl p-2">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Время работы
            </h3>
          </div>
          <div className="space-y-4">
            {openingHours.map((row) => (
              <div 
                key={row.days} 
                className={`flex justify-between items-center p-3 rounded-xl bg-gray-50`}
              >
                <span className={`font-medium text-[var(--foreground)`}>
                  {row.days}
                </span>
                <span className={`font-semibold ${
                  row.hours === "Выходной" 
                    ? "text-[var(--foreground)" 
                    : "text-[var(--secondary)]"
                }`}>
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
