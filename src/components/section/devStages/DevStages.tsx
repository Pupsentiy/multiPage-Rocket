import { FC } from "react";

import { stages } from "../../../core/constants/constants";
import { TStages } from "../../../core/constants/constants.types";

import "./devStages.scss";

const DevStages: FC = () => {
  return (
    <section className="dev-stages">
      <div className="container-main">
        <div className="container-flex">
          {window.location.pathname === "/services" ? (
            <h2> НАШ ПОДХОД К РАБОТЕ</h2>
          ) : (
            <>
              <h2>ЭТАПЫ РАЗРАБОТКИ</h2>
              <p className="dev-stages__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                molestias ad sequi est officia error voluptas? Exercitationem
                doloribus facilis
              </p>
            </>
          )}

          <ul className="dev-stages-wrapper-cards">
            {stages &&
              stages.map((stage: TStages, i: number) => (
                <li className="dev-stages-card" key={i}>
                  <div
                    className={
                      window.location.pathname === "/services"
                        ? "dev-stages-card__number-pass-services"
                        : "dev-stages-card__number"
                    }
                  >
                    {stage.number}
                  </div>
                  <div className="stages-card-text">
                    <h4
                      className={
                        window.location.pathname === "/services"
                          ? "stages-card-text__title-pass-services"
                          : "stages-card-text__title"
                      }
                    >
                      {stage.title}
                    </h4>
                    <p className="stages-card-text__subtitle">{stage.desc}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DevStages;
