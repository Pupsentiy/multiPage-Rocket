import { FC } from "react";

import "./ourProfile.scss";

const OurProfile: FC = () => {
  return (
    <section className="our-profile">
      <div className="container-main">
        <div className="our-profile-container">
          <div className="our-profile-label">
            <h4>НАШ ПРОФИЛЬ</h4>
          </div>
          <h2 className="our-profile__title">
            МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ ВАШЕГО БИЗНЕСА
          </h2>
          <p className="our-profile__subtitle">
            Подробное описание того, чем вы занимаетесь и каких результатов
            получилось достигнуть с вашими разработками
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProfile;
