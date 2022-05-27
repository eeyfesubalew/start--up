import "./Blog.scss";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import { useState } from "react";
const blogState = [
  {
    id: "b1",
    img: blog1,
    postedBy: "Admin",
    postedDate: "03 June 2022",
    blogPost:
      "Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod temporinvidunt labore.",
  },
  {
    id: "b2",
    img: blog2,
    postedBy: "Admin",
    postedDate: "03 June 2022",
    blogPost:
      "Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod temporinvidunt labore.",
  },
  {
    id: "b3",
    img: blog3,
    postedBy: "Admin",
    postedDate: "03 June 2022",
    blogPost:
      "Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod temporinvidunt labore.",
  },
];
const Blog = () => {
  const [blgState, setBlogState] = useState(blogState);
  return (
    <section className="blog-section">
      <div className="text-container blog-title">
        <p className="about-text">
          <span className="about-primary"> Our Recent,</span>
          <span className="about-secondary">Blog Posts</span>
        </p>
      </div>
      <div className="blog-container">
        {blgState.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-img-cont">
                <img src={blog.img} className="blog-img" />
              </div>
              <div className="blog-posted">
                <p className="blog-posted-by">Posted By: {blog.postedBy} </p>
                <p className="blog-posted-on">{blog.postedDate} </p>
              </div>
              <p className="blog-text">{blog.blogPost}</p>
              <div className="blog-btn-cont">
                <a className="blog-btn" href="#">
                  Learn More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Blog;
