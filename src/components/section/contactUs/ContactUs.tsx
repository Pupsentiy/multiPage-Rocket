import { FC } from "react";

import Button from "../../button/Button";

import { useGlobalContext } from "../../../hooks/hooks";

import "./contactUs.scss";

const ContactUs: FC = () => {
  const { setActiveForm } = useGlobalContext();
  return (
    <section className="contact-us">
      <div className="container-main">
        <div className="container-flex">
          {window.location.pathname !== "/about-us" ? (
            <h2 className="contact-us__title">ПОЯВИЛИСЬ ВОПРОСЫ?</h2>
          ) : (
            <h2 className="contact-us__title">ОСТАЛИСЬ ВОПРОСЫ?</h2>
          )}

          <p className="contact-us__subtitle">
            Не стесняйтесь связаться с нами в удобное для вас время по почте или
            заполните заявку, чтобы мы ответили на все интересующие вас вопросы
          </p>

          <Button
            type="button"
            classProps="contact-us__button button-brown"
            onClick={() => setActiveForm(true)}
          >
            ОСТАВИТЬ заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
