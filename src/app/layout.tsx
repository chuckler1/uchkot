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
    <html lang="ru">
      <body
        className={`${roboto.variable} ${neucha.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
