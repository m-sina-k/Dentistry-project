import React from "react";
import Heading from "./../../Components/Heading/Heading";
import headingImage from "../../Assets/Images/About-us-page/heading-image.jpeg";
import History from "./History/History";
import "./AboutUs.scss";
import Benefits from "./Benefits/Benefits";
import OurTeam from "../../Components/Our-team/OurTeam";
import Fade from 'react-reveal'

function AboutUs() {
  return (
      <div className="about-us">
    <main className="page__container">
        <Heading
          extraClass="about-us__heading"
          subtitle={null}
          title="کلینیکی که می توانید به آن اعتماد کنید!"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه "
        />
        <Fade delay={1500} duration={1000}>
        <figure className="heading-image__container">
          <img
            src={headingImage}
            alt="heading-image"
            className="heading__image"
          />
        </figure>
        </Fade>
    </main>
        <History/>
          <Benefits/>
        <OurTeam/>
      </div>
  );
}

export default AboutUs;
