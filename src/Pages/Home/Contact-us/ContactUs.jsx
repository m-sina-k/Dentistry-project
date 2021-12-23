import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./ContactUs.scss";
import Heading from "./../../../Components/Heading/Heading";
import Fade from 'react-reveal/Fade'
import circleShape from '../../../Assets/Images/others/circle-shape.svg'

function ContactUs() {
  return (
    <div className="contact-us">
      <main className="page__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 contact-us__text-container">
              <Heading
                subtitle="تماس با ما"
                title="برای رزرو وقت ملاقات با ما در ارتباط باشید."
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه "
                extraClass="contact-us__heading"
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6  d-flex justify-content-center">
              <Fade duration={1500} delay={700}>
                <div className="contact-us__form-container">
                <form action="#" className="contact-us__form">
                    <div className="form__row">
                    <section className="form__group">
                        <label htmlFor="name-input">نام</label>
                        <input type="text" name="name-input" className="contact-us__input" placeholder="نام و نام خانوادگی" />
                    </section>
                    <section className="form__group">
                        <label htmlFor="email-input">ایمیل</label>
                        <input type="text" name="email-input" className="contact-us__input" placeholder="yourmail@gmail.com" />
                    </section>
                    </div>
                    <div className="form__row">
                    <section className="form__group">
                        <label htmlFor="phone-input">تلفن همراه</label>
                        <input type="text" name="phone-input" className="contact-us__input" placeholder="091x-xxxxxxx" />
                    </section>
                    <section className="form__group">
                        <label htmlFor="service-input">خدمت</label>
                        <input type="text" name="service-input" className="contact-us__input" placeholder="مثال:جراحی دندان" />
                    </section>
                    </div>
                    <div className="form__row textarea-container">
                    <section className="form__group">
                        <label htmlFor="message-input">پیام</label>
                        <textarea  rows="6"  name="message-input" className="contact-us__input" placeholder="پیام خود را وارد کنید..." />
                    </section>
                    </div>
                    <button type="submit" className="contact-us__button button button--primary">ارسال پیام</button>
                </form>
                </div>
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
