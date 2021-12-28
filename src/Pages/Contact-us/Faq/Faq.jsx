import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";
import { faq } from "../../../Assets/Data/faq";
import { FiChevronLeft } from "react-icons/fi";
import "./Faq.scss";

function Faq() {
  const [activeAnswerIndex, setActiveAwnserIndex] = useState(null);
  const showAnswer = (id) => {
    activeAnswerIndex === id
      ? setActiveAwnserIndex(null)
      : setActiveAwnserIndex(id);
  };
  return (
    <div className="faq">
      <Heading
        subtitle="سوالات"
        title="سوالاتی که ممکن است برای شما هم پیش بیاید."
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و "
        extraClass="faq__heading"
      />

      <div className="faq__box">
        <ul className="faq__box__list">
          {faq.map((item) => {
            const { id, question, answer } = item;
            return (
              <li
                className="faq__box__list__item"
                onClick={() => showAnswer(id)}
                key={id}
              >
                <span className={`icon__container ${activeAnswerIndex === id ? 'icon__container--active' : ''}`}>
                  <FiChevronLeft className={`icon ${activeAnswerIndex === id ? 'icon--rotated' : ''}`} />
                </span>
                <span className="question">{question}</span>
                <p className={`answer ${activeAnswerIndex === id ? 'answer--active' : ''}`}>{answer}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Faq;
