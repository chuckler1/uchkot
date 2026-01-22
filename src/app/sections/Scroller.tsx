"use client";

import React, { useEffect, useRef, useState } from "react";
import { programs } from "@/data/programs";

const Scroller = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const hoveringCardRef = useRef(false);
  const directionRef = useRef<1 | -1>(1);
  const resumeAfterWheelTimeoutRef = useRef<number | null>(null);
  const resumeAfterCardLeaveTimeoutRef = useRef<number | null>(null);

  // синхронизируем state -> ref, чтобы не пересоздавать анимацию на каждом setState
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Автопрокрутка (реальный scrollLeft), чтобы можно было и паузить на карточке, и крутить колесом
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // скорость: ~120px/сек (чтобы движение было заметно)
    const SPEED_PX_PER_MS = 0.12;
    let rafId = 0;
    let lastTs = performance.now();

    const tick = (ts: number) => {
      const dt = ts - lastTs;
      lastTs = ts;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (!isPausedRef.current && maxScrollLeft > 0) {
        const half = el.scrollWidth / 2;

        // Если вторая "половина" действительно достижима (контент шире, чем половина),
        // делаем бесконечный скролл в одну сторону за счёт дублирования списка.
        // Иначе (очень широкий экран) используем пинг-понг внутри доступного диапазона.
        if (half <= maxScrollLeft) {
          el.scrollLeft += dt * SPEED_PX_PER_MS;
          if (el.scrollLeft >= half) el.scrollLeft -= half;
        } else {
          const delta = dt * SPEED_PX_PER_MS * directionRef.current;
          const next = el.scrollLeft + delta;

          if (next <= 0) {
            el.scrollLeft = 0;
            directionRef.current = 1;
          } else if (next >= maxScrollLeft) {
            el.scrollLeft = maxScrollLeft;
            directionRef.current = -1;
          } else {
            el.scrollLeft = next;
          }
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Горизонтальный скролл колесиком мыши, пока курсор над скроллером
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // если горизонтального скролла нет — не мешаем странице скроллиться
      if (el.scrollWidth <= el.clientWidth) return;

      // переводим deltaY в горизонтальный скролл (для мыши),
      // но если есть deltaX (трекпад) — используем его
      const primaryDelta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      e.preventDefault();
      el.scrollLeft += primaryDelta;

      // во время wheel-перемещения ставим на паузу авто-скролл,
      // а затем возобновляем, если курсор не над карточкой
      setIsPaused(true);
      if (resumeAfterWheelTimeoutRef.current) {
        window.clearTimeout(resumeAfterWheelTimeoutRef.current);
      }
      resumeAfterWheelTimeoutRef.current = window.setTimeout(() => {
        if (!hoveringCardRef.current) setIsPaused(false);
      }, 800);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const handleCardEnter = () => {
    hoveringCardRef.current = true;
    if (resumeAfterCardLeaveTimeoutRef.current) {
      window.clearTimeout(resumeAfterCardLeaveTimeoutRef.current);
      resumeAfterCardLeaveTimeoutRef.current = null;
    }
    setIsPaused(true);
  };

  const handleCardLeave = () => {
    hoveringCardRef.current = false;
    // небольшая задержка, чтобы при переходе между карточками не было "дёрганья"
    resumeAfterCardLeaveTimeoutRef.current = window.setTimeout(() => {
      if (!hoveringCardRef.current) setIsPaused(false);
    }, 60);
  };

  return (
    <section className="py-12" id="services">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Наши программы
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto">
            Комплексный подход к развитию вашего ребенка через разнообразные
            занятия
          </p>
        </div>

        {/* Десктоп: авто-скролл + пауза на карточке + прокрутка колесом */}
        <div className="relative w-full hidden md:block">
          {/* Оверлеи НЕ внутри скролл-контейнера, чтобы не двигались вместе с контентом */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="no-scrollbar w-full overflow-x-auto overflow-y-hidden"
          >
            <div className="flex w-max gap-6 py-4 px-24">
              {[...programs, ...programs].map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  onMouseEnter={handleCardEnter}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="space-y-4 text-center">
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                      {card.title}
                    </h3>
                    <p className="text-[var(--secondary)] leading-relaxed">
                      {card.description}
                    </p>
                    <div className="pt-2">
                      {/* TODO: Добавить кнопку, когда появяться разделы с программами */}
                      {/* <button className="text-[var(--foreground)] font-semibold hover:text-[var(--foreground)]/80 transition-colors flex items-center gap-2">
                        Узнать больше
                        <span className="transform transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Мобильные/планшеты: статичный список без анимации */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-6 py-4">
            {programs.map((card) => (
              <div
                key={card.id}
                className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="space-y-4">
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {card.title}
                  </h3>
                  <p className="text-[var(--secondary)] leading-relaxed">
                    {card.description}
                  </p>
                  <div className="pt-2">
                    <button className="text-[var(--foreground)] font-semibold hover:text-[var(--foreground)]/80 transition-colors flex items-center gap-2">
                      Узнать больше
                      <span className="transform transition-transform group-hover:translate-x-1">
                        →
                      </span>
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
};

export default Scroller;
