import { FC } from "react";

import "./OurMission.scss";
import Button from "../button/Button";

const OurMission: FC = () => {
  return (
    <section className="our-mission">
      <div className="our-mission-label">
        <h4>НАША МИССИЯ</h4>
      </div>

      <div className="our-mission-wrapper-title">
        <h1 className="our-mission__title">
          ЭКОНОМИЧЕСКИ ЭФФЕКТИВНАЯ РАЗРАБОТКА
          <br />
          <span>МОБИЛЬНЫХ ПРИЛОЖЕНИЙ</span>
        </h1>
      </div>

      <p className="our-mission__description">
        Учитывая, что стоимость разработки мобильных приложений начинается от N
        рублей, а сроки реализации проекта - всего 6 недель, неудивительно, что
        стартапы выбирают РокетСофт для создания и развития своего бизнеса
      </p>

      <Button type="button" classProps="our-mission__button">
        связаться с нами
      </Button>
    </section>
  );
};

export default OurMission;
