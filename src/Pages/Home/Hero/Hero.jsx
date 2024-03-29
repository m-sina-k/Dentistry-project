/* -------------------------------- component ------------------------------- */
import React from "react";
import { Link } from "react-router-dom";
import WorkingHours from "../Working-hours/WorkingHours";
/* ---------------------------------- style --------------------------------- */
import HeroImage from "../../../Assets/Images/others/Hero.jpeg";
import circleShape from '../../../Assets/Images/others/circle-shape.svg'
import './Hero.scss'
import Fade from 'react-reveal/Fade'
function Hero() {
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 hero__block">
            <div className="hero__block--text">
              <Fade duration={1700} delay={300}>
              <div className="hero__content-container">
              <section className="heading__container">
              <h1 className="heading"> با اطمینان ، <span className="heading__highlight">  لبخندتان </span> را به ما بسپارید! </h1>
              </section>
              <p className="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              </p>
              <section className="button__container">
                <Link className="button button--primary" to='/reservation'> رزور ویزیت </Link>
                <Link className="button button--secondary" to='/services'> خدمات </Link>
              </section>
              </div>
              </Fade>
              <img src={circleShape} alt="shape" className="bg-shape bg-shape--1" />
              <img src={circleShape} alt="shape" className="bg-shape bg-shape--2" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 hero__block">
              <div className="hero__block--image">
                  <figure className="image__container">
                      <img src={HeroImage} alt="clinic-environment" className="hero__image" />
                  </figure>
              </div>
          </div>
        </div>
      </div>
      <WorkingHours/>
    </div>
  );
}

export default Hero;
