import React, { useState, useEffect } from "react";
import Heading from "../../Components/Heading/Heading";
import circleShape from "../../Assets/Images/others/circle-shape.svg";
import Select from "react-select";
import { services } from "../../Assets/Data/services";
import  Fade from "react-reveal/Fade";
import "./Reservation.scss";

import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reservation() {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [service, setService] = useState(null);
  const [message, setMessage] = useState(null);

  const registerDate = (value) => {
    const date = value.year + "/" + value.month.number + "/" + value.day;
    const minute = value.minute < 10 ? "0" + value.minute : value.minute;
    const time = value.hour + ":" + minute;
    setTime(time);
    setDate(date);
  };

  const servicesList = [];
  for (let i = 0; i < services.length; i++) {
    servicesList.push({ value: services[i].name, label: services[i].name });
  }

  const submitReservation = (e) => {
    e.preventDefault();
    if (time && date && name && phone && !isNaN(phone)) {
      toast.success("  رزرو شما در تاریخ  " + date + "  در ساعت  " + time + "  ثبت گردید  ");
    } else {
      toast.error("لطفا فیلد های اجباری را با اطلاعات معتبر پر کنید.");
    }
  };

  return (
    <div className="reservation">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        toastClassName='toast__message'
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="page__container">
        <Heading
          subtitle="ویزیت"
          title="همین حالا یک وقت ویزیت ثبت کنید."
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و "
          extraClass="reservation__heading"
        />
<Fade delay={1000} duration={1500}>
        <div className="reservation__form-container">
          <form
            action="#"
            className="reservation__form"
            onSubmit={(e) => submitReservation(e)}
          >
            <section className="form__group">
              <label htmlFor="name-input">*نام و نام خانوادگی</label>
              <input
                name="name-input"
                type="text"
                className="form__input"
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section className="form__group">
              <label htmlFor="phone-input">*تلفن همراه</label>
              <input
                name="phone-input"
                type="text"
                className="form__input"
                placeholder="091x-xxxxxxx"
                onChange={(e) => setPhone(Number(e.target.value))}
              />
            </section>
            <section className="form__group">
              <label htmlFor="name-input">*تاریخ ویزیت</label>
              <DatePicker
                placeholder="انتخاب کنید..."
                format="MM/DD/YYYY HH:mm"
                plugins={[<TimePicker position="bottom" />]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                onChange={(value) => registerDate(value)}
              />
            </section>
            <section className="form__group">
              <label htmlFor="service-input">*خدمت مورد نظر</label>
              <Select
                placeholder="انتخاب کنید..."
                value={service}
                onChange={(value) => setService(value.name)}
                options={servicesList}
                name="services-input"
                className="service-select"
              />
            </section>
            <section className="form__group">
              <label htmlFor="message-input">پیام</label>
              <textarea
                rows={10}
                name="message-input"
                className="form__input"
                placeholder="متن پیام شما..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </section>
            <button className="form__submit button button--primary">
              ثبت ویزیت
            </button>
          </form>
        </div>
        </Fade>
      </main>
      <img src={circleShape} alt="bg-shape" className="bg-shape bg-shape--1" />
      <img src={circleShape} alt="bg-shape" className="bg-shape bg-shape--2" />
    </div>
  );
}

export default Reservation;
