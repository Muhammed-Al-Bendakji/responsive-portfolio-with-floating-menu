import React from "react";
import "./testimonials.css";
import TestimonialSwiper from "../testimonialSwiper/TestimonialSwiper";
import { avatar1, avatar2, avatar3, avatar4 } from "../../assets";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <TestimonialSwiper />
      </div>
    </section>
  );
};

export default Testimonials;
