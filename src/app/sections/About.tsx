import React from 'react';

function About() {
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
        &quot;Ученый кот&quot; — это место, где каждый ребенок может раскрыть
        свой потенциал. Мы используем современные методики дошкольного
        образования, создавая комфортную и безопасную среду для развития
        малышей.
      </p>
    </section>
  );
}

export default About;
