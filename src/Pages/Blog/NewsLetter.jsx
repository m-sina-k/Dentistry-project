import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Heading from "../../Components/Heading/Heading";
import circleShape from '../../Assets/Images/others/circle-shape.svg'
function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="newsletter__text-container">
        <span className="icon__container">
          <FaEnvelope className="icon" />
        </span>
        <Heading
          subtitle={null}
          title="در خبرنامه ما عضو شوید"
          description="برای اگاهی از آخرین اخبار کلینیک و مطلع شدن از پست های جدید وبلاگ با وارد کردن ایمیل خود در خبرنامه ما عضو شوید."
          extraClass="newsletter__heading"
        />
        <form action="#" className="newsletter__form">
            <input type="text" placeholder="ایمیل خود را وارد کنید..." className="newsletter__input" />
            <button type="submit" className="newsletter__button">عضویت</button>
        </form>
      </div>
      
    </div>
  );
}

export default NewsLetter;
