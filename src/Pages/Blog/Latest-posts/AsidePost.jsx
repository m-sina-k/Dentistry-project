import React from 'react'

function AsidePost({post}) {
    return (
        <article className="aside-post col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                  <figure className="image__container col-5">
                    <img
                      src={post.image}
                      alt="post-cover"
                      className="post__image"
                    />
                  </figure>
                  <div className="text__container col-7">
                  <a href="#" className="post__title">
                    {post.title}
                  </a>
                  <span className="post__date">{post.date}</span>
                  </div>
                </article>
    )
}

export default AsidePost
