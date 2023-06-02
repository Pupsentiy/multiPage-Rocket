import { FC, useEffect, useRef, useState } from "react";

import Button from "../../button/Button";
import Input from "../../input/Input";

import { PopupClick } from "../../../@types/global";
import { answers, sortItem } from "../../../core/constants/constants";
import { TAnswers, TSortItem } from "../../../core/constants/constants.types";
import { useWindowSize } from "../../../hooks/hooks";

import plus from "../../../assets/img/answer/plus.svg";
import minus from "../../../assets/img/answer/minus.svg";
import down from "../../../assets/img/answer/down.svg";
import up from "../../../assets/img/answer/up.svg";

import "./answers.scss";

const Answers: FC = () => {
  const sortRef = useRef<HTMLUListElement>(null);
  const [clicked, setClicked] = useState(5);
  const [itemFilter, setItemFilter] = useState(answers);
  const [sort, setSort] = useState("Все");
  const [open, setOpen] = useState<boolean>(false);
  const [width] = useWindowSize();

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(5);
    }
    setClicked(index);
  };

  const selectedSort = (name: string) => {
    setSort(name);
    const newArr = answers.filter((item: TAnswers) => item.category === name);
    if (name === "Все") {
      setItemFilter(answers);
    } else {
      setItemFilter(newArr);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && _event?.path?.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  console.log(sortRef);
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
        <ul
          className="answers-sort"
          onClick={() => setOpen(!open)}
          ref={sortRef}
        >
          {width < 575 && (
            <span className="answers-label">
              {sort}{" "}
              {open ? (
                <img src={up} alt="sort up" />
              ) : (
                <img src={down} alt="sort down" />
              )}
            </span>
          )}{" "}
          {width < 575 && open
            ? sortItem &&
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
              ))
            : width > 575
            ? sortItem &&
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
              ))
            : null}
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
