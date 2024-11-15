import React from 'react';
import './HeroComponent.css'; 

const HeroComponent = ({ title, breadtcrumb }) => {
  return (
    <section className="hero-sec">
      <div className="hero-overlay">
        <div className="hero-cont text-center">
          <h1>{title}</h1>
          <p>{breadtcrumb}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
