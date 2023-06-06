import { FC } from "react";
import { NavLink } from "react-router-dom";

import { serviceCards } from "../../../core/constants/constants";
import { TServiceCards } from "../../../core/constants/constants.types";

import { routesConfig } from "../../../routes/routesConfig";

import Button from "../../button/Button";

import "./service.scss";

const Service: FC = () => {
  return (
    <section className="service">
      <div className="container-main">
        <div className="container-flex">
          {window.location.pathname === "/services" ? (
            <>
              <h2 className="service__title-pass-service">УСЛУГИ</h2>
              <p className="service__description">
                Предоставляем обширный спектр услуг и дальше описание
              </p>
            </>
          ) : (
            <>
              <div className="service-label">
                <h4>УСЛУГИ</h4>
              </div>

              <div className="service-wrapper-title">
                <h2 className="service__title">ВОТ СЮДА ДОБАВИТЬ ЗАГОЛОВОК</h2>
              </div>
              <p className="service__description">
                Учитывая, что стоимость разработки мобильных приложений
                начинается от N рублей, а сроки реализации проекта - всего 6
                недель, неудивительно, что стартапы выбирают РокетСофт для
                создания и развития своего бизнеса
              </p>
            </>
          )}
          <ul className="service-container-card">
            {serviceCards &&
              serviceCards.map((card: TServiceCards, i: number) => (
                <li
                  className={`service-card-wrapper ${card.classNameProps}`}
                  key={i}
                >
                  <div className="service-card-wrapper-title">
                    <h4>{card.title}</h4>
                  </div>
                  <p className="service-card__description">{card.desc}</p>
                  <Button
                    type="button"
                    classProps="service-card__button button-transparent"
                  >
                    ПОДРОБНЕЕ
                  </Button>
                </li>
              ))}
          </ul>
          <NavLink to={routesConfig.services.path}>
            <Button type="button" classProps="button_second">
              Весь перечень услуг
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Service;
