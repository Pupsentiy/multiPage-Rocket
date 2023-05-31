import {
  TAdvantages,
  TAnswers,
  THeaderLink,
  TProjects,
  TReviews,
  TServiceCards,
  TSortItem,
  TStages,
} from "./constants.types";

import letMeHome from "../../assets/img/projects/letMe-web-home.png";
import letMeHomeTab from "../../assets/img/projects/letMe.png";
import onlifeHomeTab from "../../assets/img/projects/onlife.png";
import dontSmokeHomeTab from "../../assets/img/projects/dontSmoke.png";
import fotoFeedback from "../../assets/img/feedback/Ellipse 83.svg";

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

export const reviews: TReviews[] = [
  {
    id: 0,
    avatar: fotoFeedback,
    name: "Киселев Александр",
    place: "Менеджер проектов",
    workIn: "Academy",
    comment:
      "Скоро год, как сотрудничаем с компанией Рокетсофт. Начали работать с самого начала нашего бизнеса. Ребята достаточно быстро разработали приложение для внутренней коммуникации между рабочими командами.",
  },
  {
    id: 1,
    avatar: fotoFeedback,
    name: "Киселев Александр",
    place: "Менеджер проектов",
    workIn: "Academy",
    comment:
      "Скоро год, как сотрудничаем с компанией Рокетсофт. Начали работать с самого начала нашего бизнеса. Ребята достаточно быстро разработали приложение для внутренней коммуникации между рабочими командами.",
  },
  {
    id: 2,
    avatar: fotoFeedback,
    name: "Киселев Александр",
    place: "Менеджер проектов",
    workIn: "Academy",
    comment:
      "Скоро год, как сотрудничаем с компанией Рокетсофт. Начали работать с самого начала нашего бизнеса. Ребята достаточно быстро разработали приложение для внутренней коммуникации между рабочими командами.",
  },
  {
    id: 3,
    avatar: fotoFeedback,
    name: "Киселев Александр",
    place: "Менеджер проектов",
    workIn: "Academy",
    comment:
      "Скоро год, как сотрудничаем с компанией Рокетсофт. Начали работать с самого начала нашего бизнеса. Ребята достаточно быстро разработали приложение для внутренней коммуникации между рабочими командами.",
  },
  {
    id: 4,
    avatar: fotoFeedback,
    name: "Киселев Александр",
    place: "Менеджер проектов",
    workIn: "Academy",
    comment:
      "Скоро год, как сотрудничаем с компанией Рокетсофт. Начали работать с самого начала нашего бизнеса. Ребята достаточно быстро разработали приложение для внутренней коммуникации между рабочими командами.",
  },
  {
    id: 5,
    avatar: fotoFeedback,
    name: "Киселев Александр",
    place: "Менеджер проектов",
    workIn: "Academy",
    comment:
      "Скоро год, как сотрудничаем с компанией Рокетсофт. Начали работать с самого начала нашего бизнеса. Ребята достаточно быстро разработали приложение для внутренней коммуникации между рабочими командами.",
  },
];

export const answers: TAnswers[] = [
  {
    id: 0,
    title: "Разработка",
    subTitle:
      "Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопросОтвет на вопрос Ответ на вопрос",
    category: "Разработка",
  },
  {
    id: 1,
    title: "Этапы",
    subTitle:
      "Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопросОтвет на вопрос Ответ на вопрос",
    category: "Этапы",
  },
  {
    id: 2,
    title: "Сроки",
    subTitle:
      "Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопросОтвет на вопрос Ответ на вопрос",
    category: "Сроки",
  },
  {
    id: 3,
    title: "Тарифы",
    subTitle:
      "Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопрос Ответ на вопросОтвет на вопрос Ответ на вопрос",
    category: "Тарифы",
  },
];

export const sortItem: TSortItem[] = [
  { id: 0, name: "Все" },
  { id: 0, name: "Разработка" },
  { id: 0, name: "Этапы" },
  { id: 0, name: "Сроки" },
  { id: 0, name: "Тарифы" },
];
