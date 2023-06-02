import { FC } from "react";

import iphon1 from "../../../assets/img/aboutUs/iphone14-1.png";
import iphon2 from "../../../assets/img/aboutUs/iphone14-2.png";

import "./aboutUs.scss";

const AboutUs: FC = () => {
  return (
    <section className="about-us">
      <div className="container-main">
        <div className="about-us-container">
          <div className="about-us-block-description">
            <div className="about-us-label">
              <h4>О НАС</h4>
            </div>
            <h2 className="about-us__title">РОКЕТСОФТ —</h2>
            <p className="about-us__description">
              краткий копирайт о компании и том, чем занимаетесь
            </p>
          </div>
          <div className="about-us-block-img">
            <img
              className="about-us-block-img__phone1"
              src={iphon1}
              alt="phone"
            />
            <img
              className="about-us-block-img__phone2"
              src={iphon2}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
