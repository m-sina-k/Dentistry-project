import React from "react";
import Heading from "../../../Components/Heading/Heading";
import historyImage1 from "../../../Assets/Images/About-us-page/history/history-image-01.jpg";
import historyImage2 from "../../../Assets/Images/About-us-page/history/history-image-02.jpg";
import circleShape from '../../../Assets/Images/others/circle-shape.svg'
import "./History.scss";
import Slide from 'react-reveal'
function History() {
  return (
    <div className="history">
      <Heading
        extraClass="history__heading"
        subtitle="سابقه"
        title=" بیش از نیم قرن در کنار شما هستیم"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای "
      />
      <Slide delay={1500} duration={1500} bottom>
      <figure className="history__image-container ">
        <img
          src={historyImage1}
          alt="history-image"
          className="history__image history__image--1"
        />
        <img
          src={historyImage2}
          alt="history-image"
          className="history__image history__image--2"
        />
      </figure>
      </Slide>
      <img src={circleShape} className='bg-shape bg-shape--1' alt="bg-shape" />
      <img src={circleShape} className='bg-shape bg-shape--2' alt="bg-shape" />
    </div>
  );
}

export default History;
