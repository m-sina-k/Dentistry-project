import React from "react";
import { Link } from "react-router-dom";
import './BlogPost.scss'
function BlogPost({ post }) {
  const { title, summary, image, tag, date } = post;
  return (
    
      <article className="blog__post">
      <figure className="blog__post__image-container">
        <img src={image} alt="post-image" className="post__image" />
        <span className="post__tag">{tag}</span>
      </figure>
      <section className="blog__post__text-container">
        <h3 className="post__title">{title}</h3>
        <p className="post__summary">{summary}</p>
      </section>
      <section className="post__footer">
        <span className="post__date">{date}</span>
        <Link className="border-bottom-link" to="/">
          
          بیشتر بخوانید
        </Link>
      </section>
    </article>
  );
}

export default BlogPost;
