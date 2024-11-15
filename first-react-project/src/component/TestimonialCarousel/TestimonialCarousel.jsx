import React from 'react';
import './TestimonialCarousel.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCards = ({ testimonials }) => {
  return (
    <div className="testimonial-cards-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
            <div className="testimonial-rating">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>
          <p className="testimonial-text">"{testimonial.text}"</p>
          <div className="testimonial-header">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s`}
              className="testimonial-image"
            />
            <div>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-job">{testimonial.job}</p>
            </div>
            <FaQuoteLeft className="quote-icon" />
          </div>
        
          
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;
