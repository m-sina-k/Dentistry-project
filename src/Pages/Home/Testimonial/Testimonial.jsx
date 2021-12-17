import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Heading from "../../../Components/Heading/Heading";
import TestimonialCard from "./TestimonialCard";
import { testimonial } from "./../../../Assets/Data/testimonial";
// swiper js slider
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import "./Testimonial.scss";

SwiperCore.use([Navigation]);
function Testimonial() {
  return (
    <div className="testimonial">
      <Heading
        title="کیفیت خدمات ما را از مشتریان ما بشنوید!"
        subtitle="نظرات کاربران "
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون "
        extraClass="testimonial__heading"
      />
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        navigation
        loop
        className="p-3"
        breakpoints={{
          120: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          570: {
            slidesPerView: 2,
          },
          760: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 2,
            
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonial.map((user) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <TestimonialCard user={user}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;
