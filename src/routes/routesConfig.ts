import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/Home/HomePage";
import OurProjectsPage from "../pages/OurProjectsPage/OurProjectsPage";
import ServicePage from "../pages/servicePage/ServicePage";

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
    component: OurProjectsPage,
  },
  services: {
    title: "Услуги",
    path: "/services",
    component: ServicePage,
  },
  contacts: {
    title: "Контакты",
    path: "/contacts",
    component: ContactsPage,
  },
};
