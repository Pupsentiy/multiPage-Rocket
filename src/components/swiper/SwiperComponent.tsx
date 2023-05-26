import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "../button/Button";

import { TProjects } from "../../core/constants/constants.types";

import "./swiperComponent.scss";
import { useWindowSize } from "../../hooks/hooks";

export type TSwiperComponentProps = {
  items: TProjects[];
};

const SwiperComponent: FC<TSwiperComponentProps> = ({ items }) => {
  const [width] = useWindowSize();
  return (
    <Swiper
      className="swiper"
      slidesPerView={width > 1200 ? 1 : 1.5}
      grabCursor={true}
      initialSlide={1}
      centeredSlides={true}
      speed={700}
      spaceBetween={40}
      
    >
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
              <Button
                type="button"
                classProps="slide-block-text__button button-transparent"
              >
                ПЕРЕЙТИ К ПРОЕКТУ
              </Button>
            ) : null}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperComponent;
