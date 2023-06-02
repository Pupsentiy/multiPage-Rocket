import { FC, useState } from "react";

import Button from "../../button/Button";

import { advantages } from "../../../core/constants/constants";
import { TAdvantages } from "../../../core/constants/constants.types";

import Down from "../../../assets/img/accordion/arrow-down.svg";
import Up from "../../../assets/img/accordion/arrow-up.svg";

import "./ourAdvantage.scss";

const OurAdvantage: FC = () => {
  const [clicked, setClicked] = useState(5);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(5);
    }
    setClicked(index);
  };

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

          <ul className="our-advantage-accordions">
            {advantages &&
              advantages.map((item: TAdvantages, i: number) => (
                <li
                  className="our-advantage-accordion-wrapper"
                  key={i}
                  onClick={() => handleToggle(i)}
                >
                  <div className="our-advantage-accordion-wrapper-title">
                    <h4>{item.title}</h4>
                    {i === clicked ? (
                      <img
                        src={Up}
                        alt="the pointer indicates that the accordion is collapsed"
                        className="our-advantage-accordion-pointer"
                      />
                    ) : (
                      <img
                        src={Down}
                        alt="the pointer indicates that the accordion is collapsed"
                        className="our-advantage-accordion-pointer"
                      />
                    )}
                  </div>
                  <div
                    className={`our-advantage-accordion-wrapper-description ${
                      clicked === i ? "open" : ""
                    }`}
                  >
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
          </ul>
          <Button type="button" classProps="button_second">
            оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantage;
