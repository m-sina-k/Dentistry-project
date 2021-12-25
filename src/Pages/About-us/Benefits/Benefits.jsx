import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
import { benefits } from "../../../Assets/Data/benefits";
import "./Benefits.scss";
function Benefits() {
  return (
    <div className="benefits">
      <main className="page__container">
        <Heading
          subtitle="مزیت ها"
          title="چرا می توانید به ما اعتماد کنید ؟!"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله "
          extraClass="benefits__heading"
        />

        <div className="benefits__item-container">
          {benefits.map((item) => {
            const { title, id, description, image } = item;
            return (
              <article className="benefits__item" key={id}>
                <figure className="item__image-container">
                  <img src={image} alt="benefit" className="item__image" />
                </figure>
                <section className="item__info-container">
                  <h4 className="item__title">{title}</h4>
                  <p className="item__description">{description}</p>
                </section>
              </article>
            );
          })}
        </div>

        <section className="benefits__button-container">
          <Link
            to="/reservation"
            className="button button--primary benefits__button"
          >
            
            رزرو ویزیت
          </Link>
          <Link
            to="/services"
            className="button button--secondary benefits__button"
          >
            
            خدمات
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Benefits;
