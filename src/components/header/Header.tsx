import { FC } from "react";

import Button from "../button/Button";

import logo from "../../assets/img/header/logo.svg";
import OpMenuTablet from "../../assets/img/header/menu-default-tablet.svg";
import OpMenuMob from "../../assets/img/header/menu-default-mobile.svg";

import "./header.scss";
import { NavLink } from "react-router-dom";
import { routesConfig } from "../../routes/routesConfig";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container-main">
        <div className="header-content">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="header-nav-desktop">
            {Object.values(routesConfig).map(
              ({ path, title }, index: number) => (
                <NavLink key={index} to={path} className="header-nav__link">
                  {title}
                </NavLink>
              )
            )}
            <Button type="button" classProps="header-nav__button">
              оставить заявку
            </Button>
          </nav>

          <Button classProps="header__active-burgerMenu-tab" type="button">
            <img src={OpMenuTablet} alt="open burger menu" />
          </Button>
          <Button classProps="header__active-burgerMenu-mobile" type="button">
            <img src={OpMenuMob} alt="open burger menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
