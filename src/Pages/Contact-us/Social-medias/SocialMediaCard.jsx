import React from 'react'

function SocialMediaCard({image,title,linkText,linkUrl}) {
    return (
        <article className='social-media__card'>
            <figure className="image__container">
                <img src={image} alt="social-media-logo" className="card__image" />
            </figure>
            <h4 className="card__title">{title}</h4>
            <p className="card__description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از 
            </p>
            <a href={linkUrl} className='card__link border-bottom-link'>{linkText}</a>
        </article>
    )
}

export default SocialMediaCard
