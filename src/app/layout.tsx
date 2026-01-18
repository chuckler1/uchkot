import type { Metadata } from "next";
import { Roboto, Neucha } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
  display: "swap",
});

const neucha = Neucha({
  variable: "--font-neucha",
  subsets: ["cyrillic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ученый кот",
  description: "Студия раннего развития",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${roboto.variable} ${neucha.variable} antialiased`}>
        <div
          itemScope
          itemType="https://schema.org/LocalBusiness"
          className="hidden" // Скрываем разметку от отображения
        >
          <meta itemProp="name" content="Ученый кот" />
          <link itemProp="url" href="https://uchkot.ru" />
          <meta itemProp="logo" content="https://uchkot.ru/logo.png" />
          <meta itemProp="email" content="info@uchkot.ru" />
          <meta itemProp="telephone" content="+7-927-680-06-22" />

          
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="streetAddress" content="ул. Петрова, 2а, ТЦ «Глобус»" />
            <meta itemProp="addressLocality" content="Йошкар-Ола" />
            <meta itemProp="addressRegion" content="Марий Эл" />
            <meta itemProp="postalCode" content="424000" />
            <meta itemProp="addressCountry" content="RU" />
          </div>

          <meta itemProp="openingHours" content="Mo-Fr 09:00-20:00,Sa 10:00-16:00,Su closed" />
          <meta itemProp="description" content="Студия раннего развития, детская студия" />
        </div>

        {children}
      </body>
    </html>
  );
}
