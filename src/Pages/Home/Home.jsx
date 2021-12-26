import React from "react";
import AboutUs from "./Home-About-us/HomeAboutUs";
import HomeBlog from "./Blog/HomeBlog";
import ContactUs from "./Contact-us/ContactUs";
import Hero from "./Hero/Hero";
import ReservBanner from "../../Components/Reserv-banner/ReservBanner";
import HomeServices from "./Home-services/HomeServices";
import Testimonial from "./Testimonial/Testimonial";
function Home() {
  return (
    <div className="home__wrapper">
      <Hero />
      <main className="page__container">
        <HomeServices />
      </main>
      <AboutUs />
      <main className="page__container">
        <Testimonial />
        <ReservBanner/>
        <HomeBlog/> 
      </main>
      <ContactUs/>
    </div>
  );
}

export default Home;
