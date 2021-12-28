import React from 'react'
import './ContactForm.scss'

function ContactForm() {
    return (
        <div className="contact-us__form-container">
                <form action="#" className="contact-us__form">
                    <div className="form__row">
                    <section className="form__group">
                        <label htmlFor="name-input">نام</label>
                        <input type="text" name="name-input" className="contact-us__input" placeholder="نام و نام خانوادگی" />
                    </section>
                    <section className="form__group">
                        <label htmlFor="email-input">ایمیل</label>
                        <input type="text" name="email-input" className="contact-us__input" placeholder="yourmail@gmail.com" />
                    </section>
                    </div>
                    <div className="form__row">
                    <section className="form__group">
                        <label htmlFor="phone-input">تلفن همراه</label>
                        <input type="text" name="phone-input" className="contact-us__input" placeholder="091x-xxxxxxx" />
                    </section>
                    <section className="form__group">
                        <label htmlFor="service-input">خدمت</label>
                        <input type="text" name="service-input" className="contact-us__input" placeholder="مثال:جراحی دندان" />
                    </section>
                    </div>
                    <div className="form__row textarea-container">
                    <section className="form__group">
                        <label htmlFor="message-input">پیام</label>
                        <textarea  rows="6"  name="message-input" className="contact-us__input" placeholder="پیام خود را وارد کنید..." />
                    </section>
                    </div>
                    <button type="submit" className="contact-us__button button button--primary">ارسال پیام</button>
                </form>
                </div>
    )
}

export default ContactForm
