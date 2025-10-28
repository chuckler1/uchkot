import type { Metadata } from "next";
import { Roboto, Neucha } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
  display: "swap"
});

const neucha = Neucha({
  variable: "--font-neucha",
  subsets: ["cyrillic"],
  weight: ["400"],
  display: "swap"
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
      <body
        className={`${roboto.variable} ${neucha.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ученый кот",
              url: "https://uchkot.ru",
              email: "info@uchkot.ru",
              telephone: ["+7-927-680-06-22", "+7-902-103-19-03"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Петрова, 2а, ТЦ \"Глобус\"",
                addressLocality: "Йошкар-Ола",
                addressCountry: "RU",
              },
              openingHours: [
                "Mo-Fr 09:00-19:00",
                "Sa 10:00-16:00",
                "Su Closed",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
