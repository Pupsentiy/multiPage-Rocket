import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/Home/HomePage";

export type TRoutesConfig = {
  [key: string]: {
    title: string | null;
    path: string;
    component: () => JSX.Element;
  };
};

export const routesConfig: TRoutesConfig = {
  home: {
    title: "Главная",
    path: "/",
    component: HomePage,
  },
  aboutUs: {
    title: "О Нас",
    path: "/about-us",
    component: AboutUsPage,
  },
  ourProjects: {
    title: "Наши проеткы",
    path: "/our-projects",
    component: HomePage,
  },
  services: {
    title: "Услуги",
    path: "/services",
    component: HomePage,
  },
  contacts: {
    title: "Контакты",
    path: "/contacts",
    component: ContactsPage,
  },
};
