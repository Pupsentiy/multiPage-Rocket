import {
  TAdvantages,
  THeaderLink,
  TProjects,
  TServiceCards,
  TStages,
} from "./constants.types";

import letMeHome from "../../assets/img/projects/letMe-web-home.png";
import letMeHomeTab from "../../assets/img/projects/letMe.png";
import onlifeHomeTab from "../../assets/img/projects/onlife.png";
import dontSmokeHomeTab from "../../assets/img/projects/dontSmoke.png";

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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
    classNameProps: "service-container-card_blue",
  },
  {
    id: 1,
    title: "Дизайн",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
    classNameProps: "service-container-card_aqua",
  },
  {
    id: 2,
    title: "Мобильная разработка",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
    classNameProps: "service-container-card_orange",
  },
  {
    id: 2,
    title: "WEb-разработка",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
    classNameProps: "service-container-card_dark-orange",
  },
];

export const stages: TStages[] = [
  {
    id: 0,
    number: "1",
    title: "ЭТАП",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
  },
  {
    id: 1,
    number: "2",
    title: "ЭТАП",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
  },
  {
    id: 2,
    number: "3",
    title: "ЭТАП",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
  },
  {
    id: 3,
    number: "4",
    title: "ЭТАП",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ad sequi est officia error voluptas? Exercitationem",
  },
];

export const projectsWeb: TProjects[] = [
  {
    id: 0,
    name: "LET-ME",
    subTitle:
      "Британский стартап, который заставляет переосмыслить подход к сдаче студенческого жилья в аренду",
    img: letMeHome,
    classColorProps: "blue",
    link: "!#",
  },
  {
    id: 1,
    name: "ONLIFE",
    subTitle:
      "Помогает путешественникам общаться друг с другом  и зарабатывать деньги на своих приключениях",
    img: letMeHome,
    classColorProps: "aqua",
    link: "!#",
  },
  {
    id: 2,
    name: "DON’T SMOKE",
    subTitle:
      "Приложение помогающее бросить курить с помощью ежедневных мотивационных советов",
    img: letMeHome,
    classColorProps: "pink",
    link: "!#",
  },
];

export const projectsTab: TProjects[] = [
  {
    id: 0,
    name: "LET-ME",
    subTitle:
      "Британский стартап, который заставляет переосмыслить подход к сдаче студенческого жилья в аренду",
    img: letMeHomeTab,
    classColorProps: "blue",
    classColorPropsBtnSm: "blue-btn",
    link: "!#",
  },
  {
    id: 1,
    name: "ONLIFE",
    subTitle:
      "Помогает путешественникам общаться друг с другом  и зарабатывать деньги на своих приключениях",
    img: onlifeHomeTab,
    classColorProps: "aqua",
    classColorPropsBtnSm: "aqua-btn",
    link: "!#",
  },
  {
    id: 2,
    name: "DON’T SMOKE",
    subTitle:
      "Приложение помогающее бросить курить с помощью ежедневных мотивационных советов",
    img: dontSmokeHomeTab,
    classColorProps: "pink",
    classColorPropsBtnSm: "pink-btn",
    link: "!#",
  },
];
