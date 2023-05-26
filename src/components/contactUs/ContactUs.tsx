import { FC } from "react";

import "./contactUs.scss";
import Button from "../button/Button";

const ContactUs: FC = () => {
  return (
    <section className="contact-us">
      <div className="container-main">
        <div className="container-flex">
          <h2 className="contact-us__title">ПОЯВИЛИСЬ ВОПРОСЫ?</h2>

          <p className="contact-us__subtitle">
            Не стесняйтесь связаться с нами в удобное для вас время по почте или
            заполните заявку, чтобы мы ответили на все интересующие вас вопросы
          </p>

          <Button type="button" classProps="contact-us__button button-brown">
            ОСТАВИТЬ заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
