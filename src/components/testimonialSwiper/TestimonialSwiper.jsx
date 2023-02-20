import React from "react";
import { avatar1, avatar2, avatar3, avatar4 } from "../../assets";
import "./testimonialSwiper.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialSwiper = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ dynamicBullets: true }}
    >
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={avatar1} alt="avatar1" />
        </div>
        <h5 className="client__name">Erest Achiever</h5>
        <small className="client__review">
          Et ea ex labore aliquip veniam. Consequat amet ipsum excepteur est
          ullamco qui excepteur. Sunt tempor anim elit mollit consectetur
          occaecat Lorem reprehenderit qui enim est.
        </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={avatar2} alt="avatar1" />
        </div>
        <h5 className="client__name">Erest Achiever</h5>
        <small className="client__review">
          Et ea ex labore aliquip veniam. Consequat amet ipsum excepteur est
          ullamco qui excepteur. Sunt tempor anim elit mollit consectetur
          occaecat Lorem reprehenderit qui enim est.
        </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={avatar3} alt="avatar1" />
        </div>
        <h5 className="client__name">Erest Achiever</h5>
        <small className="client__review">
          Et ea ex labore aliquip veniam. Consequat amet ipsum excepteur est
          ullamco qui excepteur. Sunt tempor anim elit mollit consectetur
          occaecat Lorem reprehenderit qui enim est.
        </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={avatar4} alt="avatar1" />
        </div>
        <h5 className="client__name">Erest Achiever</h5>
        <small className="client__review">
          Et ea ex labore aliquip veniam. Consequat amet ipsum excepteur est
          ullamco qui excepteur. Sunt tempor anim elit mollit consectetur
          occaecat Lorem reprehenderit qui enim est.
        </small>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSwiper;
