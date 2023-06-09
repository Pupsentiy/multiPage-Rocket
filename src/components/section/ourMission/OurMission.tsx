import { FC } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../button/Button";

import { routesConfig } from "../../../routes/routesConfig";

import "./OurMission.scss";

const OurMission: FC = () => {

  return (
    <section className="our-mission">
      <div className="container-main">
        <div className="container-flex">
          <div className="our-mission-label">
            <h4>НАША МИССИЯ</h4>
          </div>

          <div className="our-mission-wrapper-title">
            <h2 className="our-mission__title">
              ЭКОНОМИЧЕСКИ ЭФФЕКТИВНАЯ РАЗРАБОТКА
              <br />
              <span>МОБИЛЬНЫХ ПРИЛОЖЕНИЙ</span>
            </h2>
          </div>

          <p className="our-mission__description">
            Учитывая, что стоимость разработки мобильных приложений начинается
            от N рублей, а сроки реализации проекта - всего 6 недель,
            неудивительно, что стартапы выбирают РокетСофт для создания и
            развития своего бизнеса
          </p>

          <NavLink to={routesConfig.contacts.path}>
            <Button type="button" classProps="button_second">
              связаться с нами
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
