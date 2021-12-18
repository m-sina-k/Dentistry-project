import React from "react";
import AboutUs from "./About-us/AboutUs";
import Blog from "./Blog/Blog";
import ContactUs from "./Contact-us/ContactUs";
import Hero from "./Hero/Hero";
import ReservBanner from "./Reserv-banner/ReservBanner";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
function Home() {
  return (
    <div className="home__wrapper">
      <Hero />
      <main className="page__container">
        <Services />
      </main>
      <AboutUs />
      <main className="page__container">
        <Testimonial />
        <ReservBanner/>
        <Blog/> 
      </main>
      <ContactUs/>
    </div>
  );
}

export default Home;
