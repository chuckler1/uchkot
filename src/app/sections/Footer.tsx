"use client";
import React from "react";
import Image from "next/image";
import { organizationName } from "@/data/contacts";

// Вариант 3: Footer с акцентом на контакты и карту
export const FooterVariant3 = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[var(--background)] border-t border-gray-200">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Левая колонка - О студии */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <div>
                <p className="font-neucha text-2xl">{organizationName}</p>
                <p className="text-sm text-[var(--secondary)]">
                  Студия раннего развития
                </p>
              </div>
            </div>
            <p className="text-[var(--secondary)] leading-relaxed mb-6">
              Мы помогаем детям открывать мир знаний через игру, творчество и
              обучение. Создаём комфортную и безопасную среду для развития
              малышей от 3 до 7 лет.
            </p>
            <div className="flex justify-center items-center gap-2 border-t pt-4 border-gray-200">
              <a
                href="https://vk.com/kot_yo"
                className="flex items-center gap-2 text-sm text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
                </svg>
                <span className="font-bold">ВКонтакте</span>
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <p className="text-xs text-[var(--secondary)] text-center md:text-left">
              © {new Date().getFullYear()} Учёный Кот. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Экспорт компонента по умолчанию (можно выбрать любой вариант)
const Footer = FooterVariant3;

export default Footer;
