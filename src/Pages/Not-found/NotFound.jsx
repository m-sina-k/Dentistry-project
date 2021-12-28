import React from "react";
import circleShape from '../../Assets/Images/others/circle-shape.svg'
import  Fade  from "react-reveal/Fade";
import "./NotFound.scss";
function NotFound() {
  return (
    <div className="not-found">
      <Fade duration={1500} delay={500}>
      <div className="not-found__container">
        <div className="text-container">
          <h1 className="numbers">404</h1>
          <h3 className="title">صفحه مورد نظر یافت نشد.</h3>
          <p className="description">
            صفحه ای که به دنبال آن هستید وجود ندارد یا انتقال یافته است.
          </p>
        </div>
        <div className="button-container">
          <button className="button button--primary">رزرو ویزیت</button>
          <button className="button button--secondary">صفحه اصلی</button>
        </div>
      </div>
      </Fade>
      <img src={circleShape} className='bg-shape bg-shape--1' alt="bg-shape" />
      <img src={circleShape} className='bg-shape bg-shape--2' alt="bg-shape" />
    </div>
  );
}

export default NotFound;
