import { ReactNode } from "react";

export type Advantage = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const advantages: Advantage[] = [
  {
    title: "Опытные педагоги",
    description: "Сертифицированные специалисты с многолетней практикой",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L2 7l10 5 9-4.5V17h2V7L12 2z" />
        <path d="M4 10v5c0 .8 2.7 2 8 2s8-1.2 8-2v-5l-8 4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Безопасная среда",
    description: "Тёплая атмосфера и внимание к каждому ребёнку",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2l7 4v6c0 5-3.6 9.4-7 10-3.4-.6-7-5-7-10V6l7-4z" />
      </svg>
    ),
  },
  {
    title: "Индивидуальный подход",
    description: "Подстраиваем занятия под темп и интересы ребёнка",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
        <path d="M4 22a8 8 0 0116 0H4z" />
      </svg>
    ),
  },
  {
    title: "Малые группы",
    description: "Больше внимания и вовлечённости для каждого",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 11a3 3 0 100-6 3 3 0 000 6zm10 0a3 3 0 100-6 3 3 0 000 6zM7 13c-2.7 0-5 2.2-5 5v2h6v-2c0-.7.1-1.4.4-2H7c.7 0 1.4.1 2 .4-1-1.2-2.5-2-4-2zm10 0c-1.5 0-3 .8-4 2 .6-.3 1.3-.4 2-.4h.6c.3.6.4 1.3.4 2v2h6v-2c0-2.8-2.3-5-5-5z" />
      </svg>
    ),
  },
  {
    title: "Современные методики",
    description: "Игровые форматы, творчество и обучение",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M11 2h2v10h-2z" />
        <path d="M7 8h10v2H7z" />
        <path d="M5 14h14v2H5z" />
      </svg>
    ),
  },
  {
    title: "Удобное расписание",
    description: "Гибкие слоты занятий утром и днём",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 2v2H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H9V2H7zm12 6H5v11h14V8z" />
        <path d="M7 12h5v2H7z" />
      </svg>
    ),
  },
];


