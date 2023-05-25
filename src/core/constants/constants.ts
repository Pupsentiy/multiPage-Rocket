import { TAdvantages, THeaderLink, TServiceCards } from "./constants.types";

export const headerLink: THeaderLink[] = [
  { id: 0, title: "Главная", link: "#!" },
  { id: 1, title: "О нас", link: "#!" },
  { id: 2, title: "Наши проекты", link: "#!" },
  { id: 3, title: "Услуги", link: "#!" },
  { id: 4, title: "Контакты", link: "#!" },
];

export const advantages: TAdvantages[] = [
  { id: 0, title: "ЛОНДОНСКИЙ ПОДРЯДЧИК", desc: "Сопровождающий текст" },
  { id: 1, title: "БЕСПЛАТНОЕ ОБСЛУЖИВАНИЕ", desc: "Сопровождающий текст" },
  { id: 2, title: "ДОЛГОСРОЧНОЕ СОТРУДНИЧЕСТВО", desc: "Сопровождающий текст" },
];

export const serviceCards: TServiceCards[] = [
  {
    id: 0,
    title: "Предпроектный анализ",
    desc: "Описание",
    classNameProps: "service-container-card_blue",
  },
  { id: 1, title: "Дизайн", desc: "Описание", classNameProps: "service-container-card_aqua" },
  {
    id: 2,
    title: "Мобильная разработка",
    desc: "Описание",
    classNameProps: "service-container-card_orange",
  },
  {
    id: 2,
    title: "WEb-разработка",
    desc: "Описание",
    classNameProps: "service-container-card_dark-orange",
  },
];
