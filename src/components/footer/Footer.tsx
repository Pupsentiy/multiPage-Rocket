import { FC } from "react";

import Button from "../button/Button";
import Input from "../input/Input";

import {
  footerNavigation,
  footerService,
} from "../../core/constants/constants";
import { TLink } from "../../core/constants/constants.types";

import { useWindowSize } from "../../hooks/hooks";

import logo from "../../assets/img/footer/logo.svg";

import "./footer.scss";

const Footer: FC = () => {
  const [width] = useWindowSize();
  return (
    <footer className="footer">
      <div className="container-main">
        <div className="footer-container">
          <div className="footer-other">
            <div className="footer-wrepper-logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="footer-other__email">email@rs.com</p>
            <p className="footer-other__address">
              Россия, г. Москва ул. Производственная 11/8
            </p>

            {width > 992 && <p className="footer-other__signature">© РокетСофт 2022</p>}
          </div>

          <div className="footer-navigation">
            <p className="footer-navigation__title">Навигация</p>
            <ul className="footer-navigation-list">
              {footerNavigation &&
                footerNavigation.map((item: TLink, i: number) => (
                  <li className="footer-navigation-list-item" key={i}>
                    <a
                      href={item.link}
                      className="footer-navigation-item__link"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="footer-service">
            <p className="footer-service__title">Обслуживание</p>
            <ul className="footer-service-list">
              {footerService &&
                footerService.map((item: TLink, i: number) => (
                  <li className="footer-service-list-item" key={i}>
                    <a href={item.link} className="footer-service-item__link">
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <form className="footer-form">
            <p className="footer-from__title">Свяжитесь с нами</p>
            <div className="footer-form-wrapper-input">
              <Input
                type="text"
                htmlFor="Имя"
                placeholder="Имя"
                classInput="footer-form__input"
                classLabel="footer-from-input__label"
              />
              <Input
                type="text"
                htmlFor="e-mail"
                placeholder="e-mail"
                classInput="footer-form__input"
                classLabel="footer-from-input__label"
              />
            </div>
            <Button type="submit" classProps="footer-form__button button-transparent">
              отправить
            </Button>
          </form>
          {width < 992 && <p className="footer-other__signature">© РокетСофт 2022</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
