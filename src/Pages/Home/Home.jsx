import React from "react";
import AboutUs from "./About-us/AboutUs";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
function Home() {
  return (
    <div className="home__wrapper">
      <Hero />
      <main className="page__container">
        <Services />
      </main>
      <AboutUs />
    </div>
  );
}

export default Home;
