export type ProgramCard = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const programs: ProgramCard[] = [
  {
    id: 1,
    title: "Подготовка к школе",
    description: "Комплексная программа для детей 5-7 лет",
    icon: "🎒",
  },
  {
    id: 2,
    title: "Творческая мастерская",
    description: "Рисование, лепка, поделки",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Шахматный клуб",
    description: "Развитие логического мышления",
    icon: "♟️",
  },
  {
    id: 4,
    title: "Театральная студия",
    description: "Актерское мастерство и сценическая речь",
    icon: "🎭",
  },
  {
    id: 5,
    title: "Английский язык",
    description: "Изучение языка через игру",
    icon: "🗽",
  },
  {
    id: 6,
    title: "Логопедические занятия",
    description: "Коррекция речи и развитие коммуникации",
    icon: "🗣️",
  },
];


