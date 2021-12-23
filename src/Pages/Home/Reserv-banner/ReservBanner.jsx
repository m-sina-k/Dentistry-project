import React from 'react'
import {Link} from 'react-router-dom'
import bannerImage from '../../../Assets/Images/Home-page/reserv-banner.jpeg'
import Jump from 'react-reveal/Jump';
import circleShape from '../../../Assets/Images/others/circle-shape.svg'
import './ReservBanner.scss'

function ReservBanner() {
    return (
        <Jump duration={1500}>
        <div className='reserv-banner'>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 reserv-banner__text-container">
                        <h1 className="reserv-banner__text">
                        همین حالا <br/>یک وقت مشاوره حضوری یا تلفنی ثبت کنید! 
                        </h1>
                        <Link className='button button--secondary reserv-banner__button' to='/reservation'> رزرو ویزیت </Link>
                        <img src={circleShape} alt="shape" className='bg-shape bg-shape--1'/>
                        <img src={circleShape} alt="shape" className='bg-shape bg-shape--2'/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 p-0 reserv-banner__image-container">
                        <img src={bannerImage} alt="reserv-banner-image" className='reserv-banner__image'/>
                    </div>
                </div>
            </div>
        </div>
        </Jump>
    )
}

export default ReservBanner
