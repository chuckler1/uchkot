import React from "react";
import { advantages } from "@/data/advantagesData";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto max-w-5xl flex flex-col gap-6 p-6 my-14"
    >
      <div className="w-fit bg-[var(--foreground)]/5 rounded-full px-4 py-2">
        <p className="text-s font-bold text-[var(--foreground)]">
          О нашей студии
        </p>
      </div>
      <h2 className="text-4xl font-bold text-[var(--secondary)] leading-tight">
        Мы помогаем детям открывать мир знаний через игру
      </h2>
      <p className="text-lg font-light text-[var(--secondary)] leading-relaxed">
        &quot;Ученый Кот&quot; — это место, где каждый ребенок может раскрыть
        свой потенциал. Мы используем современные методики дошкольного
        образования, создавая комфортную и безопасную среду для развития
        малышей.
      </p>

      <div className="w-fit bg-[var(--foreground)]/5 rounded-full px-4 py-2">
        <p className="text-s font-bold text-[var(--foreground)]">Наши преимущества</p>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
        Почему нас выбирают родители
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((item: { title: string; description: string; icon: React.ReactNode }) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-5 bg-white/60 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="bg-[var(--foreground)]/10 text-[var(--foreground)] rounded-xl p-3 flex-shrink-0">
              {item.icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
