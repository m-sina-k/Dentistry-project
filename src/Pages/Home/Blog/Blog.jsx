import React from "react";
import { blogPosts } from "../../../Assets/Data/blogPosts";
import Heading from "../../../Components/Heading/Heading";
import BlogPost from "./BlogPost";
import "./Blog.scss";

function Blog() {
  return (
    <div className="blog">
      <Heading
        title="مقالات ما درباره سلامت دندان"
        subtitle="بلاگ"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون "
        extraClass="blog__heading"
      />
      <div className="posts__container">
          {blogPosts.map(post=> <BlogPost post={post}/>)}
      </div>
    </div>
  );
}

export default Blog;
