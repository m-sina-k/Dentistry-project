import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Heading from "../../../Components/Heading/Heading";
import clinicPic1 from "../../../Assets/Images/Home-page/About -us/about-us-pic-01.jpeg";
import clinicPic2 from "../../../Assets/Images/Home-page/About -us/about-us-pic-02.jpeg";
import doctorPic from "../../../Assets/Images/others/doctors/doctor-01.jpg";
import circleShape from "../../../Assets/Images/others/circle-shape.svg";
import "./HomeAboutUs.scss";
function HomeAboutUs() {
  return (
    <div className="home-about-us">
      <main className="page__container">
        <div className="home-about-us__container">
          <div className="row about-us__row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 home-about-us__image-container">
              <Zoom duration={1500}>
                <figure className="parent-image__container">
                  <img src={clinicPic1} alt="clinic-environment" />
                  <figure className="child-image__container">
                    <img src={clinicPic2} alt="clinic-environment" />
                  </figure>
                </figure>
              </Zoom>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 home-about-us__text-container">
              <Heading
                title="تنه‍‍‍‍‍‍‍‍ا وظیفه م‍‍‍‍‍‍‍‍ا ، هدیه لبخندی زیب‍‍‍‍‍‍‍‍ا به شم‍‍‍‍‍‍‍‍است !"
                subtitle="درب‍‍‍‍‍‍‍‍اره م‍‍‍‍‍‍‍‍ا"
                description="لورم ‍‍‍‍‍‍‍‍ایپسوم متن س‍‍‍‍‍‍‍‍اختگی ب‍‍‍‍‍‍‍‍ا تولید س‍‍‍‍‍‍‍‍ادگی ن‍‍‍‍‍‍‍‍امفهوم ‍‍‍‍‍‍‍‍از صنعت چ‍‍‍‍‍‍‍‍اپ، و ب‍‍‍‍‍‍‍‍ا ‍‍‍‍‍‍‍‍استف‍‍‍‍‍‍‍‍اده ‍‍‍‍‍‍‍‍از طر‍‍‍‍‍‍‍‍اح‍‍‍‍‍‍‍‍ان گر‍‍‍‍‍‍‍‍‍‍‍‍‍افیک ‍‍‍‍‍‍‍‍است، چ‍‍‍‍‍‍‍‍اپگره‍‍‍‍‍‍‍‍ا و متون بلکه روزن‍‍‍‍‍‍‍‍امه و مجله در ستون و سطرآنچن‍‍‍‍‍‍‍‍ان که ل‍‍‍‍‍‍‍‍ازم ‍‍‍‍‍‍‍‍است،"
              />
              <section className="doctor">
                <figure className="image__container">
                  <img src={doctorPic} alt="Dr.X" className="image" />
                </figure>
                <section className="info">
                  <h3 className="name">دکتر محسن هد‍‍‍‍‍‍‍‍ایتی</h3>
                  <p className="description">مدیر کلینیک</p>
                </section>
              </section>
              <Link
                className="button button--primary about-us__button"
                to="/about-us"
              >
                بیشتر بد‍‍‍‍‍‍‍‍انید
              </Link>
            </div>
          </div>
        </div>
      </main>
      <img src={circleShape} alt="shape" className="bg-shape bg-shape--1" />
      <img src={circleShape} alt="shape" className="bg-shape bg-shape--2" />
    </div>
  );
}

export default HomeAboutUs;
