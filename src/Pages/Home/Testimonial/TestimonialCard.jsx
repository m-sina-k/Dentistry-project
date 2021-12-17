import React from 'react'

function TestimonialCard({user}) {
    const {name,image,review} = user;
    return (
        <article className='testimonial__card'>
            <figure className="user__image-container">
                <img src={image} alt="user-profile-pic"  className='user__image'/>
            </figure>
            <section className="user__info">
                <h3 className="user__name">
                    {name}
                </h3>
                <p className="user__review">
                    {review}
                </p>
            </section>
        </article>
    )
}

export default TestimonialCard
