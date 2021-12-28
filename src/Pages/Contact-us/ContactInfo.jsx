import React from 'react'
import Heading from "../../Components/Heading/Heading";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import ContactForm from '../../Components/Contact-form/ContactForm';
import Fade from 'react-reveal/Fade'
import circleShape from '../../Assets/Images/others/circle-shape.svg'

function ContactInfo() {
    return (
        <div className="contact-us__contact-information">
        <main className="page__container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 contact-us__text-container">
                <Heading
                  subtitle={null}
                  title="برای رزرو وقت ملاقات با ما در ارتباط باشید."
                  description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه "
                  extraClass="contact-us__heading"
                />
                <ul className="contact-info__list">
                  <li className="contact__item">
                    <span className="icon__container">
                      <ImLocation className="icon" />
                    </span>
                    <section className="contact__item__text">
                      <h5 className="title">نشانی</h5>
                      <p className="description">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از
                      </p>
                    </section>
                  </li>
                  <li className="contact__item">
                    <span className="icon__container">
                      <FaPhoneAlt className="icon" />
                    </span>
                    <section className="contact__item__text">
                      <h5 className="title">تلفن</h5>
                      <a href="tel:021-78543901" className="description">
                        021-78543901
                      </a>
                    </section>
                  </li>
                  <li className="contact__item">
                    <span className="icon__container">
                      <FaEnvelope className="icon" />
                    </span>
                    <section className="contact__item__text">
                      <h5 className="title">ایمیل</h5>
                      <a
                        href="mailto:info@yourdomain.com"
                        className="description"
                      >
                        info@yourdomain.com
                      </a>
                    </section>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 form__column">
                <Fade duration={1500} delay={700}>
                <ContactForm />
                </Fade>
              </div>
            </div>
          </div>
        </main>
        <img src={circleShape} alt="bg-shape" className="bg-shape bg-shape--1" />
        <img src={circleShape} alt="bg-shape" className="bg-shape bg-shape--2" />
      </div>
    )
}

export default ContactInfo
