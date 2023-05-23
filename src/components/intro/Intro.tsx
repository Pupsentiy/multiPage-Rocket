import { FC } from "react";

import "./intro.scss";
import Button from "../button/Button";

const Intro: FC = () => {
  return (
    <section className="intro">
      <div className="container-main">
        <h1 className="intro__title">
          РАЗРАБОТАЙТЕ СВОЕ ПРИЛОЖЕНИЕ
          <br />
          <span>БЫСТРЕЕ, КАЧЕСТВЕННЕЕ И ДЕШЕВЛЕ</span> <br />
          С ПОМОЩЬЮ
         <br className="intro-br"/> <span>РОКЕТСОФТ</span>
        </h1>

        <div className="intro-links">
          <a href="#!">
            <Button
              type="button"
              classProps=" intro-links__transparent  intro-link__button"
            >
              перейти к проектам
            </Button>
          </a>
          <a href="#!">
            <Button
              type="button"
              classProps="intro-links__primary intro-link__button"
            >
              Оставить заявку
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
