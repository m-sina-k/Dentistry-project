import React from "react";
import Heading from "../../../Components/Heading/Heading";
import facebookLogo from "../../../Assets/Images/others/social-medias/facebook.svg";
import twitterLogo from "../../../Assets/Images/others/social-medias/twitter.svg";
import instagramLogo from "../../../Assets/Images/others/social-medias/instagram.svg";
import googleMapsLogo from "../../../Assets/Images/others/social-medias/googleMaps.svg";
import circleShape from '../../../Assets/Images/others/circle-shape.svg'
import SocialMediaCard from "./SocialMediaCard";
import "./SocialMedias.scss";

function SocialMedias() {
  return (
    <div className="social-medias">
      <main className="page__container">
        <Heading
          subtitle={null}
          title="ما را در شبکات مجازی دنبال کنید."
          description={null}
          extraClass="social-medias__heading"
        />
        <div className="social__card-container">
          <SocialMediaCard
            title="فیسبوک"
            linkText="ما را دنبال کنید"
            linkUrl="https://www.facebook.com"
            image={facebookLogo}
          />
          <SocialMediaCard
            title="توئیتر"
            linkText="ما را دنبال کنید"
            linkUrl="https://www.twitter.com"
            image={twitterLogo}
          />
          <SocialMediaCard
            title="اینستاگرام"
            linkText="ما را دنبال کنید"
            linkUrl="https://www.instagram.com"
            image={instagramLogo}
          />
          <SocialMediaCard
            title="گوگل مپز"
            linkText="نمایش موقعیت مکانی"
            linkUrl="https://www.google.com/maps"
            image={googleMapsLogo}
          />
        </div>
      </main>
      <img src={circleShape} className="bg-shape bg-shape--1" alt="bg-shape" />
      <img src={circleShape} className="bg-shape bg-shape--2" alt="bg-shape" />
    </div>
  );
}

export default SocialMedias;
