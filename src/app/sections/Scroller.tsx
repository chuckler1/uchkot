"use client";

import React, { useState } from 'react';

const Scroller = () => {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    { id: 1, title: "Подготовка к школе", description: "Комплексная программа для детей 5-7 лет", icon: "🎒" },
    { id: 2, title: "Творческая мастерская", description: "Рисование, лепка, поделки", icon: "🎨" },
    { id: 3, title: "Шахматный клуб", description: "Развитие логического мышления", icon: "♟️" },
    { id: 4, title: "Музыкальные занятия", description: "Пение, ритмика, игра на инструментах", icon: "🎵" },
    { id: 5, title: "Театральная студия", description: "Актерское мастерство и сценическая речь", icon: "🎭" },
    { id: 6, title: "Английский язык", description: "Изучение языка через игру", icon: "🇬🇧" },
    { id: 7, title: "Логопедические занятия", description: "Коррекция речи и развитие коммуникации", icon: "🗣️" },
    { id: 8, title: "Спортивная гимнастика", description: "Физическое развитие и координация", icon: "🤸" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Наши программы
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto">
            Комплексный подход к развитию вашего ребенка через разнообразные занятия
          </p>
        </div>
        
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Градиентные маски для плавного исчезновения */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
          
          {/* Контейнер с анимацией */}
          <div className={`flex gap-6 py-4 ${isPaused ? 'animate-scroll-paused' : 'animate-scroll'}`}>
            {/* Дублируем карточки для бесшовной анимации */}
            {[...cards, ...cards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="text-4xl mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {card.title}
                  </h3>
                  <p className="text-[var(--secondary)] leading-relaxed">
                    {card.description}
                  </p>
                  <div className="pt-2">
                    <button className="text-[var(--foreground)] font-semibold hover:text-[var(--foreground)]/80 transition-colors flex items-center gap-2">
                      Узнать больше 
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scroller;
