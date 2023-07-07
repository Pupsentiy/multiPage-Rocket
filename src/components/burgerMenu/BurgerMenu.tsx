import { FC } from "react";
import { NavLink } from "react-router-dom";

import { routesConfig } from "../../routes/routesConfig";

import Button from "../button/Button";
import close from "../../assets/img/close.svg";

import { useGlobalContext } from "../../hooks/hooks";

import "./burgerMenu.scss";

const BurgerMenu: FC = () => {
  const { setActiveForm, setActiveBurgerMenu } = useGlobalContext();

  const openForm = () => {
    setActiveForm(true);
  };

  const closeBurgerMenu = () => {
    setActiveBurgerMenu(false);
  };

  return (
    <div className="wrapper-burger">
      <div className="wrapper-button-close">
        <Button
          type="button"
          classProps="burger__button-close"
          onClick={() => closeBurgerMenu()}
        >
          <img src={close} alt="close" />
        </Button>
      </div>
      <nav className="burger-nav-desktop">
        {Object.values(routesConfig).map(({ path, title }, index: number) => (
          <NavLink
            key={index}
            to={path}
            className="burger-nav__link"
            onClick={() => setActiveBurgerMenu(false)}
          >
            {title}
          </NavLink>
        ))}
        <Button
          type="button"
          classProps="burger-nav__button"
          onClick={() => openForm()}
        >
          оставить заявку
        </Button>
      </nav>
    </div>
  );
};

export default BurgerMenu;
