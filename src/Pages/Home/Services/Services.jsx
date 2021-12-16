/* -------------------------------- component ------------------------------- */
import React from "react";
import Heading from "../../../Components/Heading/Heading";
import ServicesCard from "./ServicesCard";
import { v4 as uuidv4 } from 'uuid';
// swiper js slider
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { homeServices } from "../../../Assets/Data/home-services";
import "./Services.scss";
SwiperCore.use([Navigation]);

function Services() {
  return (
    <div className="services">
      <Heading
        subtitle=" خدمات "
        title=" تیم پزشکی ما خدمات متعددی را برای  دندان های شما ارائه میکند."
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
        {homeServices.map((service) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <ServicesCard service={service}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Services;
