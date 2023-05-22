import { FC } from "react";

import Button from "../button/Button";

import logo from "../../assets/img/header/logo.svg";

import { headerLink } from "../../core/constants/constants";
import { THeaderLink } from "../../core/constants/constants.types";

import "./header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header-nav">
        {headerLink &&
          headerLink.map((link: THeaderLink, i: number) => (
            <a href={link.link} key={i} className="header-nav__link">
              {link.title}
            </a>
          ))}
        <Button type="button" classProps="header-nav__button">
          оставить заявку
        </Button>
      </nav>
    </header>
  );
};

export default Header;
