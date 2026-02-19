'use client';

import React from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const goToContacts = () => router.push("/#feedback");
  const goToAbout = () => router.push("/#about");
  return (
    <section className="container mx-auto max-w-5xl flex flex-col items-center gap-6 p-6 my-20">
      <div className="flex items-center justify-center gap-3 bg-[var(--foreground)]/5 rounded-full px-4 py-2">
        <svg
          fill="currentColor"
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-500"
          aria-hidden="true"
        >
          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
        </svg>
        <p className="font-semibold text-sm text-[var(--foreground)]">Опыт работы более 15 лет</p>
      </div>
      <div className="text-center space-y-4">
        <p className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
          Детская студия
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight">
          &quot;Учёный Кот&quot;
        </h1>
      </div>
      <div className="text-center max-w-2xl">
        <p className="text-lg md:text-xl text-[var(--secondary)] leading-relaxed">
          Всестороннее развитие детей от 3 до 7 лет через игру, творчество и
          обучение в уютной атмосфере
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-[var(--foreground)]/10 rounded-xl p-3 flex-shrink-0">
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--foreground)]"
              aria-hidden="true"
            >
              <title>Подготовка к школе</title>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill="currentColor" transform="translate(42.666667, 64.000000)">
                  <path d="M1.20792265e-13,197.76 C54.5835501,218.995667 112.186031,231.452204 170.666667,234.666667 L170.666667,277.333333 L256,277.333333 L256,234.666667 C314.339546,231.013 371.833936,218.86731 426.666667,198.613333 L426.666667,362.666667 L1.20792265e-13,362.666667 L1.20792265e-13,197.76 Z M277.333333,-1.42108547e-14 L298.666667,21.3333333 L298.666667,64 L426.666667,64 L426.666667,175.146667 C361.254942,199.569074 292.110481,212.488551 222.293333,213.333333 L222.293333,213.333333 L206.933333,213.333333 C136.179047,212.568604 66.119345,199.278929 7.10542736e-15,174.08 L7.10542736e-15,174.08 L7.10542736e-15,64 L128,64 L128,21.3333333 L149.333333,-1.42108547e-14 L277.333333,-1.42108547e-14 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z" />
                </g>
              </g>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Подготовка к школе
            </h3>
            <p className="text-sm text-[var(--secondary)]">
              Комплексная подготовка к первому классу
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-[var(--foreground)]/10 rounded-xl p-3 flex-shrink-0">
            <svg
              fill="currentColor"
              width="28px"
              height="28px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--foreground)]"
              aria-hidden="true"
            >
              <title>Творческое развитие</title>
              <g id="Knowledge">
                <path d="M397.5765,258.8732,269.125,287.3982v183.75l134.0506-29.8367A13.0954,13.0954,0,0,0,413.5,428.5358V271.6478A13.0751,13.0751,0,0,0,397.5765,258.8732Zm-18.4634,141.75-70,15.5753c-16.7352,3.5675-22.5757-21.6251-5.6866-25.6369l70-15.5753C390.3091,371.5209,395.9274,396.6024,379.1131,400.6227Zm0-61.25-70,15.5753c-16.7352,3.5675-22.5757-21.6251-5.6866-25.6369l70-15.5753C390.3091,310.2709,395.9274,335.3524,379.1131,339.3727Z" />
                <path d="M98.5,271.6478v156.888a13.0193,13.0193,0,0,0,10.239,12.7757l134.136,29.8367v-183.75l-128.4494-28.525A13.0427,13.0427,0,0,0,98.5,271.6478Zm39.9881,40.3385,70,15.5752a13.13,13.13,0,1,1-5.6866,25.6369l-70-15.5752C116.0214,333.6135,121.5692,308.52,138.4881,311.9863Zm0,61.25,70,15.5752a13.13,13.13,0,1,1-5.6866,25.6369l-70-15.5752C116.0214,394.8635,121.5692,369.77,138.4881,373.2363Z" />
                <path d="M295.375,198.4114h-78.75C211.0644,262.2762,300.8758,262.3157,295.375,198.4114Z" />
                <path d="M223.8006,172.1614H288.114l16.8869-23.9749a59.9765,59.9765,0,0,0-6.7377-76.65c-52.5556-50.1672-131.6495,16.2162-91.2619,76.65Z" />
                <path d="M339.0823,176.9979c4.3088,2.01,15.4449,10.3991,20.4309,9.7786,13.0267.3108,18.1793-18.0822,6.571-24.4941l-13.8769-8.014C337.134,145.8773,324.2867,168.125,339.0823,176.9979Z" />
                <path d="M159.7415,154.263l-13.8855,8.0152c-11.6126,6.4161-6.4515,24.8005,6.571,24.4983,5.0458.5928,16.06-7.7524,20.44-9.7744C187.662,168.1154,174.8254,145.9082,159.7415,154.263Z" />
                <path d="M346.3967,113.8626a13.1256,13.1256,0,0,0,13.125,13.125h16.0218c17.2522-.2916,17.2479-25.9584,0-26.25H359.5217A13.1257,13.1257,0,0,0,346.3967,113.8626Z" />
                <path d="M136.4053,126.9876H152.427c17.2522-.2916,17.2479-25.9584,0-26.25H136.4053a13.125,13.125,0,0,0,0,26.25Z" />
                <path d="M345.6533,75.2182c5.0458.5907,16.0517-7.7566,20.4309-9.7786,14.802-8.876,1.94-31.1206-13.125-22.73l-13.8769,8.0151C327.4676,57.1361,332.633,75.5258,345.6533,75.2182Z" />
                <path d="M145.856,65.4439c4.3087,2.01,15.4513,10.397,20.4394,9.7743,13.0289.3066,18.1793-18.0842,6.5711-24.4983l-13.8855-8.014C143.8928,34.34,131.0668,56.5647,145.856,65.4439Z" />
              </g>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Творческое развитие
            </h3>
            <p className="text-sm text-[var(--secondary)]">
              Мастер-классы, творческие занятия, шахматы
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <Button variant="primary" onClick={goToContacts}>
          Записаться на пробное занятие
        </Button>
        <Button variant="secondary" onClick={goToAbout}>
          Узнать больше
        </Button>
      </div>
    </section>
  );
};

export default Hero;
