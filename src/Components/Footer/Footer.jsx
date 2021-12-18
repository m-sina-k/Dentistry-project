import React from "react";
import Heading from "./../Heading/Heading";
import { FaEnvelope, FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <section className="footer__block newsletter col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <Heading
              title="در خبرنامه ما عضو شوید."
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک "
              extraClass="newsletter__heading"
            />
            <form action="#" className="newsletter__form">
              <input
                type="text"
                className="newsletter__input"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button type="submit" className="newsletter__button">
                ثبت نام
              </button>
            </form>
          </section>
          <section className="footer__block contact col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h5 className="title">راه های ارتباطی</h5>
            <ul>
              <li>
                <span className="icon-container">
                  <FaEnvelope className="icon" />
                </span>
                <span className="text">info@yourdomain.com</span>
              </li>
              <li>
                <span className="icon-container">
                  <FaPhoneAlt className="icon" />
                </span>
                <span className="text">021-78543901</span>
              </li>
              <li>
                <span className="icon-container">
                  <ImLocation className="icon" />
                </span>
                <span className="text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از{" "}
                </span>
              </li>
            </ul>
          </section>
          <section className="footer__block social col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h5 className="title">مارا در شبکات مجازی دنبال کنید</h5>
            <ul>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <FaFacebookSquare className="icon" />
                  </span>
                  <span className="text">فیسبوک</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <AiFillInstagram className="icon" />
                  </span>
                  <span className="text">اینستاگرام</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <RiWhatsappFill className="icon" />
                  </span>
                  <span className="text">واتس اپ </span>
                </a>
              </li>
            </ul>
          </section>
          <section className="footer__copy-right">
              <p className="copy-right__text">
                  تمامی حقوق مادی و معنوی برای کلینیک دندانپزشکی محفوظ است.
              </p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
