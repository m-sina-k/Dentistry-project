import React from 'react'

function ServicesCard({service}) {
    const {name,image,description} = service;
    return (
        <article className='home-services__card servives__card'>
            <figure className="image__container">
                <img src={image} alt="service" className='service__image' />
            </figure>
            <section className="content">
                <h3 className="service__name">{name}</h3>
                <p className="service__description">
                    {description}
                </p>
                <a href="#" className='service__link border-bottom-link'> اطلاعات بیشتر </a>
            </section>
        </article>
    )
}

export default ServicesCard
