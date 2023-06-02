import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { reviews } from "../../../core/constants/constants";
import { TReviews } from "../../../core/constants/constants.types";

import { useWindowSize } from "../../../hooks/hooks";

import "./reviews.scss";

const Reviews: FC = () => {
  const [width] = useWindowSize();

  return (
    <section className="rewiews">
      <div className="rewiews-label">
        <h4>ПРОЕКТЫ</h4>
      </div>
      <Swiper
        className="swiper"
        // slidesPerView={width < 1440 ? 2.5 : width < 992 ? 2 : 2.2}
        slidesPerView={1.5}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={width > 1200 ? 18 : 30}
        // slidesPerGroup={1}
        speed={1500}
      >
        <div className="swiper-wrapper">
          {reviews &&
            reviews.map((item: TReviews, idx: number) => (
              <SwiperSlide key={idx} className="swiper-slide">
                <div className={`slide `}>
                  <div className="rewiews-wrapper-avatar">
                    <img src={item.avatar} alt="foto feedback" />
                  </div>
                  <div className="reviews-wrapper-info">
                    <h6>{item.name}</h6>
                    <p className="reviews-info__place">{item.place}</p>
                    <p className="reviews-info__work">{item.workIn}</p>
                    <p className="reviews-info__comment">{item.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Reviews;
