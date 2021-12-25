import React from "react";
import {services} from "../../Assets/Data/services";
import Heading from "../../Components/Heading/Heading";
import ReservBanner from "../../Components/Reserv-banner/ReservBanner";
import "./Services.scss";
import ServicesCard from './../../Components/ServicesCard';
function Services() {
  return (
    <div className="services">
      <main className="page__container">
      <Heading
        subtitle={null}
        title="خدمات ما"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله "
        extraClass='services__heading'
      />
      <div className="services__item-container">
        {services.map(item=><ServicesCard service={item}/>)}
      </div>
      <ReservBanner/>
      </main>
    </div>
  );
}

export default Services;
