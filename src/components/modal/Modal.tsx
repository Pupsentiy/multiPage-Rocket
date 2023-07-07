import { FC } from "react";

import Input from "../input/Input";
import Button from "../button/Button";

import { useGlobalContext } from "../../hooks/hooks";

import "./modal.scss";

const Modal: FC = () => {
  const { activeForm, setActiveForm } = useGlobalContext();
  return (
    <div
      className={activeForm ? "modal active" : "modal"}
      onClick={() => setActiveForm(false)}
    >
      <div
        className={activeForm ? "modal__content active" : "modal__content"}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        <div className="modal-header">
          <h4>Заполните заявку на ваш проект</h4>
          <Button
            type="button"
            classProps="modal-header__btn"
            onClick={() => setActiveForm(false)}
          >
            X
          </Button>
        </div>
        <form action="" className="modal-form">
          <div className="modal-block-name">
            <Input
              type="text"
              classInput={"form__input"}
              placeholder="Имя"
              htmlFor="Имя"
              classLabel="form__input-label"
            />
            <Input
              type="text"
              classInput={"form__input"}
              placeholder="Фамилия"
              htmlFor="Фамилия"
              classLabel="form__input-label form__input-label-surname"
            />
          </div>
          <div className="modal-block-contacts">
            <Input
              type="email"
              classInput={"form__input"}
              placeholder="e-mail"
              htmlFor="e-mail"
              classLabel="form__input-label"
            />
            <Input
              type="phone"
              classInput={"form__input"}
              placeholder="Номер телефона"
              htmlFor="Номер телефона"
              classLabel="form__input-label"
            />
          </div>
          <textarea className="from-textarea" placeholder="Описание проекта" />

          <Button
            type="submit"
            classProps="modal-btn-submit"
            onClick={() => setActiveForm(false)}
          >
            отправить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
