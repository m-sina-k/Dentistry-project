import React from "react";
import ContactInfo from "./ContactInfo";
import "./ContactUs.scss";
import Faq from "./Faq/Faq";
import SocialMedias from './Social-medias/SocialMedias'

function ContactUs() {
  return (
    <div className="contact-us">
      <ContactInfo />
      <Faq />
      <SocialMedias />
    </div>
  );
}

export default ContactUs;
