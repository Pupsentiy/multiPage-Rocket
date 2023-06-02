import { FC } from "react";

import { serviceCards } from "../../../core/constants/constants";
import { TServiceCards } from "../../../core/constants/constants.types";

import Button from "../../button/Button";

import "./service.scss";

const Service: FC = () => {
  return (
    <section className="service">
      <div className="container-main">
        <div className="container-flex">
          <div className="service-label">
            <h4>УСЛУГИ</h4>
          </div>
          <div className="service-wrapper-title">
            <h2 className="service__title">ВОТ СЮДА ДОБАВИТЬ ЗАГОЛОВОК</h2>
          </div>
          <p className="service__description">
            Учитывая, что стоимость разработки мобильных приложений начинается
            от N рублей, а сроки реализации проекта - всего 6 недель,
            неудивительно, что стартапы выбирают РокетСофт для создания и
            развития своего бизнеса
          </p>

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

          <Button type="button" classProps="button_second">
            Весь перечень услуг
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Service;
