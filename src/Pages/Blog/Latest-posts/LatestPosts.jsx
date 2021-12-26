import React from 'react'
import AsidePost from "./AsidePost";

function LatestPosts({latestPost,asidePosts}) {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="mb-4  col-12 col-sm-12 col-12 col-lg-6 col-xl-7 blog-post__container blog-post__container--latest">
            <figure className="post__image-container">
              <img
                src={latestPost.image}
                alt="post-cover"
                className="post__image"
              />
            </figure>
            <div className="post__info-container">
              <a href="#" className="post__title">
                {latestPost.title}
              </a>
              <p className="post__summary">{latestPost.summary}</p>
              <strong className="post__date">{latestPost.date}</strong>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-12 col-lg-6 col-xl-5 blog-post__container blog-post__container--aside">
            <div className="row">
            {asidePosts.map((post) => (
              <AsidePost post={post} key={post.id}/>
            ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default LatestPosts
