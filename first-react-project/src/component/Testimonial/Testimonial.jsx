import React from "react";
import "./Testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import "../TestimonialCarousel/TestimonialCarousel";

function Testimonial() {
  const testimonials = [
    {
      name: "Kristin Watson",
      job: "Web Designer",
      text: "Futchi has completely transformed our process. The user-friendly interface and powerful features streamlined our workflow. Highly recommended for all",
      rating: 5,
      image: "/src/assets/images/testiThumb3_1.webp",
    },
    {
      name: "Theresa Webb",
      job: "Web Developer",
      text: "I've been using Futchi for several months now, and I'm extremely impressed with the level of customization it offers. The wide range of templates...",
      rating: 4,
      image: "/src/assets/images/testiThumb3_2.webp",
    },
    {
      name: "Kristin Watson",
      job: "Web Designer",
      text: "Futchi has completely transformed our process. The user-friendly interface and powerful features streamlined our workflow. Highly recommended for all",
      rating: 5,
      image: "/src/assets/images/testiThumb3_3.webp",
    },
  ];

  return (
    <section>
      <div className="testimg-sec">
        <div className="container">
          <div className="Testi-wrapper">
            <div className="img-test">
              <img src="/src/assets/images/ctaThumb1_1.webp" alt="CTA Image" />
            </div>
            <div className="items">
              <p>← Contact us →</p>
              <h1>24/7 Business Innovation With IT Services</h1>
            </div>
            <div>
              <button className="btn-testi">Talk to specialist → </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="container">
          <div className="card-content">
            <div className="testi-title">
              <p>← Testimonials →</p>
              <h1>Our Latest Client Feedback</h1>
            </div>

            <div className="cards">
              {testimonials.map((testimonial, index) => (
                <div className="card" key={index}>
                 <div className="str-testi">
                 <div className="rating">{"★".repeat(testimonial.rating)}</div>
                 <p className="text">{testimonial.text}</p>
                 </div>
                  <div className="icon-testi">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                    <div className="descrp-testi">
                      <p className="testi-name" >{testimonial.name}</p >
                      <p className="job">{testimonial.job}</p>
                    </div>
                    <FaQuoteLeft className="quote-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
