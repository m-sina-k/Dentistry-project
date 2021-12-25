import React from "react";
import { ourTeam } from "../../Assets/Data/ourTeam";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Heading from "../Heading/Heading";
import circleShape from '../../Assets/Images/others/circle-shape.svg'
import "./OurTeam.scss";
import { Zoom } from "react-reveal";
function OurTeam() {
  return (
    <div className="our-team">
      <Heading
        subtitle="تیم ما"
        title="کادر پزشکی مجرب ما آماده خدمت گذاری به شماست"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و "
        extraClass="our-team__heading"
      />
      <main className="page__container">
        <Zoom delay={1000} duration={1500}>
      <div className="our-team__item-container">
        {ourTeam.map((item) => {
          const { id, name, post, image, email, phone } = item;
          return (
            <article className="our-team__item" key={id}>
              <figure className="item__image-container">
                <img src={image} alt="team-member" className="item__image" />
              </figure>
              <section className="item__info-container">
                <h3 className="item__name">{name}</h3>
                <p className="item__post">{post}</p>
                <section className="item__contact-container">
                  <a href={`tel:(${phone})`} className="contact__item">
                    <FaPhoneAlt className="icon" />
                  </a>
                  <a href={`mailto:(${email})`} className="contact__item">
                    <FaEnvelope className="icon" />
                  </a>
                </section>
              </section>
            </article>
          );
        })}
      </div>
      </Zoom>
      </main>
      <img src={circleShape} alt="bg-shape" className="bg-shape bg-shape--1" />
      <img src={circleShape} alt="bg-shape" className="bg-shape bg-shape--2" />
    </div>
  );
}

export default OurTeam;
