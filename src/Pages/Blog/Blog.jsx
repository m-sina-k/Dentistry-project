import React from "react";
import Heading from "./../../Components/Heading/Heading";
import { blogPosts } from "../../Assets/Data/blogPosts";
import { categories } from "../../Assets/Data/blogPosts";
import "./Blog.scss";
import LatestPosts from "./Latest-posts/LatestPosts";
import BlogPost from '../../Components/BlogPost/BlogPost';
import NewsLetter from "./NewsLetter";
import circleShape from '../../Assets/Images/others/circle-shape.svg'
import  Slide  from "react-reveal/Slide";
import  Fade  from "react-reveal/Fade";

function Blog() {
  const latestPost = blogPosts.at(-1);
  const asidePosts = blogPosts.slice(0,4);
  
  return (
    <div className="blog">
      <main className="page__container">
        <Heading title="آخرین پست ها" description={null} subtitle={null} />
       <Fade delay={1000} duration={1500}>
       <LatestPosts latestPost={latestPost} asidePosts={asidePosts}/>
       </Fade>
      </main>
     <div className="posts__container">
       <div className="posts__container__heading">
       <Heading  title="پست های وبلاگ" extraClass='posts__container__title' description={null} subtitle={null} />
         <ul className="category__container">
         <li className="category__item category__item--active">همه</li>
         {categories.map(category=>(
           <li className="category__item" key={category.id}>{category.name}</li>
         ))}
         </ul>
       </div>
       {blogPosts.map(post=><BlogPost post={post} key={post.id}/>)}
       <img src={circleShape} className="bg-shape bg-shape--1" alt="bg-shape" />
       <img src={circleShape} className="bg-shape bg-shape--2" alt="bg-shape" />
     </div>
    <Slide duration={1200} delay={1000} bottom>
    <NewsLetter/>
    </Slide>
     <img src={circleShape} className="bg-shape bg-shape--1" alt="bg-shape" />
    </div>
  );
}

export default Blog;
