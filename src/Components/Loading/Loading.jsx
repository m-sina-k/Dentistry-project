import React from 'react'
import logo from '../../Assets/Images/logo.png'
import './Loading.scss'
function Loading() {
    return (
        <div className= 'loading'>
           <div className="loading__container">
           <figure className="loading__logo-container">
                <img src={logo} alt="logo" className='loading__logo' />
            </figure>
            <div className="animation"></div>
           </div>
        </div>
    )
}

export default Loading
