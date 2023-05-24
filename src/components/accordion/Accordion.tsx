import { FC, useState } from "react";

import Down from "../../assets/img/accordion/arrow-down.svg";
import Up from "../../assets/img/accordion/arrow-up.svg";

import { TAdvantages } from "../../core/constants/constants.types";
import { TAccordion } from "./accordion.types";

import "./accordion.scss";

const Accordion: FC<TAccordion> = ({ items }) => {
  const [clicked, setClicked] = useState(5);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(5);
    }
    setClicked(index);
  };

  return (
    <ul className="accordions">
      {items &&
        items.map((item: TAdvantages, i: number) => (
          <li
            className="accordion-wrapper"
            key={i}
            onClick={() => handleToggle(i)}
          >
            <div className="accordion-wrapper-title">
              <h4>{item.title}</h4>
              {i === clicked ? (
                <img
                  src={Up}
                  alt="the pointer indicates that the accordion is collapsed"
                  className="accordion-pointer"
                />
              ) : (
                <img
                  src={Down}
                  alt="the pointer indicates that the accordion is collapsed"
                  className="accordion-pointer"
                />
              )}
            </div>
            <div
              className={`accordion-wrapper-description ${
                clicked === i ? "open" : ""
              }`}
            >
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Accordion;
