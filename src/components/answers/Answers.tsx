import { FC, useState } from "react";

import Input from "../input/Input";
import Button from "../button/Button";

import { answers, sortItem } from "../../core/constants/constants";
import { TAnswers, TSortItem } from "../../core/constants/constants.types";

import plus from "../../assets/img/answer/plus.svg";
import minus from "../../assets/img/answer/minus.svg";

import "./answers.scss";

const Answers: FC = () => {
  const [clicked, setClicked] = useState(5);
  const [itemFilter, setItemFilter] = useState(answers);
  const [sort, setSort] = useState("Все");
  
  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(5);
    }
    setClicked(index);
  };

  const selectedSort = (name: string) => {
    setSort(name);
    const newArr = answers.filter((item) => item.category === name);
    if (name === "Все") {
      setItemFilter(answers);
    } else {
      setItemFilter(newArr);
    }
  };
  return (
    <section className="answers">
      <div className="container-main">
        <div className="answers-wrapper-title">
          <h2 className="answers__title">Какой вопрос вас интересует?</h2>
          <Input
            type="text"
            classInput="answers-wrapper-title__input"
            placeholder="Найти ответы"
          />
        </div>
        <ul className="answers-sort">
          {sortItem &&
            sortItem.map((item: TSortItem, i: number) => (
              <li className="answers-sort-item" key={i}>
                <Button
                  type="button"
                  classProps={`${
                    sort === item.name && "active"
                  } answers-sort-item__button`}
                  onClick={() => selectedSort(item.name)}
                >
                  {item.name}
                </Button>
              </li>
            ))}
        </ul>

        <ul className="answers-accordions">
          {itemFilter &&
            itemFilter.map((item: TAnswers, i: number) => (
              <li
                className="answers-accordion-wrapper"
                key={i}
                onClick={() => handleToggle(i)}
              >
                <div className="answers-accordion-wrapper-title">
                  {i === clicked ? (
                    <img
                      src={minus}
                      alt="the pointer indicates that the accordion is collapsed"
                      className="answers-accordion-pointer"
                    />
                  ) : (
                    <img
                      src={plus}
                      alt="the pointer indicates that the accordion is collapsed"
                      className="answers-accordion-pointer"
                    />
                  )}
                  <h4>{item.title}</h4>
                </div>
                <div
                  className={`answers-accordion-wrapper-description ${
                    clicked === i ? "open" : ""
                  }`}
                >
                  <p>{item.subTitle}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Answers;
