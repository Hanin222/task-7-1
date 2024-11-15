import React from "react";
import "./Blog.css";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";

function Blog() {
  const blogs = [
    {
      category: "Technology",
      date: "November 12, 2024",
      title: "Exploring Quantum Physics in Technology",
      author: {
        name: "John Doe",
        job: "AI Researcher",
        image: "/src/assets/images/blogProfile1_1.webp",
      },
      image: "/src/assets/images/blogThumb1_1.webp",
    },
    {
      category: "Science",
      date: "October 28, 2024",
      title: "Exploring Quantum Physics in Technology",
      author: {
        name: "Jane Smith",
        job: "Physicist",
        image: "/src/assets/images/blogProfile1_2.webp",
      },
      image: "/src/assets/images/blogThumb1_2.webp",
    },
    {
      category: "Health",
      date: "September 5, 2024",
      title: "Exploring Quantum Physics in Technology",
      author: {
        name: "Mike Brown",
        job: "Medical Scientist",
        image: "/src/assets/images/blogProfile1_3.webp",
      },
      image: "/src/assets/images/blogThumb1_3.webp",
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-head">
          <p>← Blog & News →</p>
          <div className="head-titl">
            <h1>Feature news and insights</h1>
            <div>
              <FaArrowAltCircleLeft className="icon-blog" />
              <FaArrowAltCircleRight className="icon-blog" />
            </div>
          </div>
        </div>
        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>

              <div className="blog-content">
                <div className="blog-overlay">
                  <div className="category">{blog.category}</div>
                  <div className="date">{blog.date}</div>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-author">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <p className="author-name">{blog.author.name}</p>
                    <p className="author-job">{blog.author.job}</p>
                  </div>
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
