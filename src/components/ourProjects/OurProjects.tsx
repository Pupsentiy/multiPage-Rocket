import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../button/Button";

import { TProjects, TSortItem } from "../../core/constants/constants.types";
import { projectsTab, sortItemProjects } from "../../core/constants/constants";

import { useWindowSize } from "../../hooks/hooks";

import "./ourPorjects.scss";

const OurProjects: FC = () => {
  const [width] = useWindowSize();
  const [sort, setSort] = useState<string>("Все");
  const [filter, setFilter] = useState<TProjects[]>(projectsTab);
  const [activeButton, setActiveButton] = useState<number>(4);

  const onChangeSort = (name: string) => {
    setSort(name);
    const filterItems = projectsTab.filter((item) => item.category === name);

    if (name === "Все") {
      setFilter(projectsTab);
    } else {
      setFilter(filterItems);
    }
  };

  const onHoverBtn = (id: number) => {
    setActiveButton(id);
  };

  const onLeaveBtn = () => {
    setActiveButton(4);
  };

  return (
    <section className="our-projects">
      <div className="container-main">
        <h2 className="our-projects__title">НАШИ ПРОЕКТЫ</h2>
        <ul className="our-projects-menu-sort">
          {sortItemProjects &&
            sortItemProjects.map((item: TSortItem, i: number) => (
              <li className="our-projects-menu-item" key={i}>
                <Button
                  type="button"
                  onClick={() => onChangeSort(item.name)}
                  classProps={`${
                    sort === item.name
                      ? "our-projects-item__btn_active"
                      : "our-projects-item__btn"
                  }`}
                >
                  {item.name}
                </Button>
              </li>
            ))}
        </ul>

        <div className="our-projects-wrapper">
          {filter &&
            filter.map((item: TProjects, i: number) => (
              <div
                className={`our-projects-project-container ${item.classColorProps}`}
                key={i}
                onMouseEnter={() => onHoverBtn(item.id)}
                onMouseLeave={() => onLeaveBtn()}
              >
                <div className="our-projcets-projects-wrapper-text">
                  <h2 className="our-projects-project__title">{item.name}</h2>
                  <p className="our-projects-project__subtitle">
                    {item.subTitle}
                  </p>
                </div>
                <img src={item.img} alt="img project" />

                {width > 1200 && (
                  <NavLink to={item.link}>
                    <Button
                      type="button"
                      classProps={`our-projects-project__button ${
                        item.classColorPropsBtnSm
                      } ${
                        activeButton === item.id &&
                        "our-projects-project__button_active"
                      }`}
                    >
                      ПЕРЕЙТИ К ПРОЕКТУ
                    </Button>
                  </NavLink>
                )}

                {width < 1200 && (
                  <NavLink to={item.link}>
                    <Button
                      type="button"
                      classProps={`our-projects-project__button ${item.classColorPropsBtnSm} `}
                    >
                      ПЕРЕЙТИ К ПРОЕКТУ
                    </Button>
                  </NavLink>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
