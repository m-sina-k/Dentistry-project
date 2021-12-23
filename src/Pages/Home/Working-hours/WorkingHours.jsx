/* ---------------------------------- components --------------------------------- */
import React from "react";
import { Link } from "react-router-dom";
/* ---------------------------------- style --------------------------------- */
import { FaEnvelope, FaTooth } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import "./WorkingHours.scss";

function WorkingHours() {
  return (
    <div className="working-hours">
      <section className="working-hours__item">
        <span className="icon__container">
          <FaEnvelope className="icon" />
        </span>
        <section className="description">
          <h2 className="title"> تماس با ما</h2>
          <ul>
            <li>021-78543901</li>
            <li>info@yourdomain.com</li>
            <li>
              <Link to="/reservation" className="border-bottom-link">
                رزرو ویزیت
              </Link>
            </li>
          </ul>
        </section>
      </section>
    
      <section className="working-hours__item">
        <span className="icon__container">
          <BsFillClockFill className="icon" />
        </span>
        <section className="description">
          <h2 className="title">ساعات کاری </h2>
          <ul>
            <li>
              <span>
                <strong> شنبه تا چهارشنبه : </strong>از 7 صبح تا 10 شب
              </span>
            </li>
            <li>
              <span>
                <strong>پنجشنبه : </strong>
                از 9 صبح تا 7 عصر
              </span>
            </li>
            <li>
              <span>
                <strong> جمعه : </strong>
                از 9 صبح تا 5 عصر
              </span>
            </li>
          </ul>
        </section>
      </section>
      <section className="working-hours__item">
        <span className="icon__container">
          <FaTooth className="icon" />
        </span>
        <section className="description">
          <h2 className="title"> خدمات </h2>
          <ul>
            <li> سفید سازی و لمینت</li>
            <li> ارتودنسی و جراحی </li>
            <li>جرم گیری دندان</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default WorkingHours;
