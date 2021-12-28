import React from "react";
import { blogPosts } from "../../../Assets/Data/blogPosts";
import Heading from "../../../Components/Heading/Heading";
import BlogPost from "../../../Components/BlogPost/BlogPost";
import {v4 as uuidv4} from 'uuid'
import "./HomeBlog.scss";

function HomeBlog() {
  return (
    <div className="home-blog">
      <Heading
        title="مقالات ما درباره سلامت دندان"
        subtitle="بلاگ"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون "
        extraClass="home-blog__heading"
      />
      <div className="posts__container">
          {blogPosts.slice(0,3).map(post=> <BlogPost post={post} key={uuidv4()}/>)}
      </div>
    </div>
  );
}

export default HomeBlog;
