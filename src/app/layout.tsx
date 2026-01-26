import type { Metadata } from "next";
import { Roboto, Neucha } from "next/font/google";
import "./globals.css";

const siteUrl = new URL("https://u4kot.ru");
const siteName = "Учёный Кот";

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
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Студия раннего развития «Учёный Кот» в Йошкар‑Оле: занятия для детей 3–7 лет, подготовка к школе, творчество и развитие в уютной атмосфере.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteName,
    description:
      "Студия раннего развития «Учёный Кот» в Йошкар‑Оле: занятия для детей 3–7 лет, подготовка к школе, творчество и развитие.",
    locale: "ru_RU",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${siteName} — Open Graph`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Студия раннего развития «Учёный Кот» в Йошкар‑Оле: занятия для детей 3–7 лет.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
          className="sr-only" // Не display:none: оставляем в DOM для поисковиков (в т.ч. Яндекс).
        >
          <meta itemProp="name" content="Учёный Кот" />
          <link itemProp="url" href="https://u4kot.ru" />
          <meta itemProp="logo" content="https://u4kot.ru/logo.png" />
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
