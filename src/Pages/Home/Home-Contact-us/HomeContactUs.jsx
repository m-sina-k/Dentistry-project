import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./HomeContactUs.scss";
import Heading from "../../../Components/Heading/Heading";
import Fade from 'react-reveal/Fade'
import circleShape from '../../../Assets/Images/others/circle-shape.svg'
import ContactForm from "../../../Components/Contact-form/ContactForm";

function ContactUs() {
  return (
    <div className="home__contact-us">
      <main className="page__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 home__contact-us__text-container">
              <Heading
                subtitle="تماس با ما"
                title="برای رزرو وقت ملاقات با ما در ارتباط باشید."
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه "
                extraClass="home__contact-us__heading"
              />
              <section className="contact-us__info">
                <section className="contact__block">
                  <span className="icon__container">
                    <FaPhoneAlt className="icon" />
                  </span>
                  <h5 className="text">021-78543901</h5>
                </section>
                <section className="contact__block">
                  <span className="icon__container">
                    <FaEnvelope className="icon" />
                  </span>
                  <h5 className="text">info@yourdomain.com</h5>
                </section>
              </section>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 form__column">
              <Fade duration={1500} delay={700}>
                <ContactForm/>
                </Fade>
            </div>
          </div>
        </div>
      </main>  
      <img src={circleShape} alt="shape" className="bg-shape bg-shape--1" />
      <img src={circleShape} alt="shape" className="bg-shape bg-shape--2" />

    </div>
  );
}

export default ContactUs;
