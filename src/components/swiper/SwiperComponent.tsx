import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "../button/Button";

import { TProjects } from "../../core/constants/constants.types";

import { useWindowSize } from "../../hooks/hooks";

import "./swiperComponent.scss";

export type TSwiperComponentProps = {
  items: TProjects[];
};

/// ДОДЕЛАТЬ АТОМАТИЧЕСКОЕ ЛИСТАНИе

const SwiperComponent: FC<TSwiperComponentProps> = ({ items }) => {
  const [width] = useWindowSize();
  return (
    <Swiper
      className="swiper"
      slidesPerView={width > 1200 ? 1 : 1.5}
      grabCursor={true}
      centeredSlides={true}
      initialSlide={1}
      spaceBetween={width > 1200 ? 0 : 20}
      slidesPerGroup={1}
      // simulateTouch={true}
      // observer={true}
      // observeSlideChildren={true}
    >
      <div className="swiper-wrapper">
        {items &&
          items.map((item: TProjects, idx: number) => (
            <SwiperSlide key={idx} className="swiper-slide">
              <div className={`slide ${item.classColorProps}`}>
                <div className="container-main">
                  <div className="slide-container-flex">
                    <div className="slide-block-text">
                      {width > 1200 && (
                        <div className="slide-main-label">
                          <h4>ПРОЕКТЫ</h4>
                        </div>
                      )}
                      <h1 className="sliede-block-text__name">{item.name}</h1>
                      <p className="slide-block-text__sibtitle">
                        {item.subTitle}
                      </p>
                      {width > 1200 ? (
                        <a href={item.link}>
                          <Button
                            type="button"
                            classProps="slide-block-text__button button-transparent"
                          >
                            ПЕРЕЙТИ К ПРОЕКТУ
                          </Button>
                        </a>
                      ) : null}
                    </div>
                    <div className="slide-block-wrapper-img">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {width < 1200 ? (
                <a href={item.link}>
                  <Button
                    type="button"
                    classProps={`slide-block-text__button-sm ${item.classColorPropsBtnSm} `}
                  >
                    ПЕРЕЙТИ К ПРОЕКТУ
                  </Button>
                </a>
              ) : null}
            </SwiperSlide>
          ))}
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
