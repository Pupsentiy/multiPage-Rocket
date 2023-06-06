import { FC } from "react";

import Button from "../../button/Button";

import { useGlobalContext } from "../../../hooks/hooks";

import "./intro.scss";
import { routesConfig } from "../../../routes/routesConfig";

const Intro: FC = () => {
  const {  setActive } = useGlobalContext();
  return (
    <section className="intro">
      <div className="container-main">
        <h2 className="intro__title">
          РАЗРАБОТАЙТЕ СВОЕ ПРИЛОЖЕНИЕ
          <br />
          <span>БЫСТРЕЕ, КАЧЕСТВЕННЕЕ И ДЕШЕВЛЕ</span> <br />
          С ПОМОЩЬЮ
          <br className="intro-br" /> <span>РОКЕТСОФТ</span>
        </h2>

        <div className="intro-links">
          <a href={routesConfig.ourProjects.path}>
            <Button
              type="button"
              classProps=" intro-links__transparent  intro-link__button"
            >
              перейти к проектам
            </Button>
          </a>
          <a href="#!">
            <Button type="button" classProps="button-brown intro-link__button" onClick={() => setActive(true)}>
              Оставить заявку
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
