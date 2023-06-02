import { FC } from "react";

import Button from "../../button/Button";

import { useWindowSize } from "../../../hooks/hooks";

import "./contacts.scss";

const Contacts: FC = () => {
  const [width] = useWindowSize();

  return (
    <section className="contacts">
      <div className="container-main">
        <div className="contacts-container">
          {width < 1200 && (
            <div className="conrtacts-label">
              <h4>КОНТАКТЫ</h4>
            </div>
          )}
          <div className="contacts-wrapper-content">
            <div className="contacts-block-left">
              <h2 className="contacts-block-left__title">
                ОПИШИТЕ СВОЙ ЗАПРОС И ПОЛУЧИТЕ
              </h2>
              <h2 className="contacts-block-left__title">
                ПЕРСОНАЛЬНОЕ ПРЕДЛОЖЕНИЕ
              </h2>
              <p className="contacts-block-left__subtitle">
                Процесс разработки программного обеспечения может быть очень
                запутанным. Не позволяйте этому испортить ваш день! Не
                стесняйтесь связаться с нами в удобное для вас время по почте
                или заполните заявку, чтобы передать нам более точный запрос
              </p>
              <Button type="button" classProps="contct-block-left__button">
                ОСТАВИТЬ заявку
              </Button>
            </div>
            <div className="contacts-block-right">
              <div className="conrtacts-label">
                <h4>КОНТАКТЫ</h4>
              </div>
              <div className="contacts-email">
                <h4>E-mail</h4>
                <p>email@rs.com</p>
              </div>
              <div className="contacts-address">
                <h4>Адрес</h4>
                <p>Россия, г. Москва ул. Производственная 11/8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
