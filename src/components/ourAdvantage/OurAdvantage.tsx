import { FC } from "react";

import Button from "../button/Button";

import { advantages } from "../../core/constants/constants";

import "./ourAdvantage.scss";
import Accordion from "../accordion/Accordion";

const OurAdvantage: FC = () => {
  return (
    <section className="our-advantage">
      <div className="container-main">
        <div className="container-flex">
          <div className="our-advantage-label">
            <h4>НАШИ ПРЕИМУЩЕСТВА</h4>
          </div>

          <div className="our-advantage-wrapper-title">
            <h2 className="our-advantage__title">
              ВОТ СЮДА ДОБАВИТЬ ЗАГОЛОВОК
            </h2>
          </div>
          <Accordion items={advantages} />
          <Button type="button" classProps="button_second">
            оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantage;
