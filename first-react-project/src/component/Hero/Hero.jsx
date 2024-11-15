import React from "react";
import "./Hero.css";
// import FaArrowAltCircleRight  from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="sec-wrapper">
        <div className="container">
          <div className="hero-content">
            <div className="wrapper">
              <div className="text-content">
                <span className="badge">
                  Everything You Need To Create A Website
                </span>
                <h1 className="hero-title">
                  Business Innovation With IT Services Expertise
                </h1>
                <ul className="hero-features">
                  <div>
                    <li> ✓ Deployment and Support</li>
                    <li>✓ Flexibility and Adaptability</li>
                  </div>
                  <div>
                    <li>✓ Discovery and Analysis</li>
                    <li>✓ Competitive Advantage</li>
                  </div>
                </ul>
                <button className="cta-btn">Get Started →</button>
              </div>
              <div className="trust-section">
                <div className="trust-box">
                  <p className="fw-bold">Trustpilot</p>
                  <div className="vew-img">
                    <img src="/src/assets/images/profileShape1_1.webp" alt="" />
                    <p>450+ reviews</p>
                  </div>
                </div>
                <div class="separator"></div>
                <div className="trust-box">
                  <p className="fw-bold">Google</p>
                  <div className="vew-img">
                    <img src="/src/assets/images/profileShape1_1.webp" alt="" />
                    <p>600+ reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-images">
              <div className="hero-shape">
                <img
                  src="/src/assets/images/heroShape1_1.webp"
                  alt="Hero Shape"
                />
              </div>
              <div className="hero-thumb">
                <img
                  src="/src/assets/images/heroThumb1_1.webp"
                  alt="Hero Thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand">

      <div class="brand=compont">
            <div class="circle">
              <div>
          <img src="/src/assets/images/heroShape1_3.webp" alt="j" />
                </div>
            </div>
          </div>

        <div class="brand-content">

         <img src="/src/assets/images/brandLogo1_1.svg" />
         <img src="/src/assets/images/brandLogo1_2.svg" />
         <img src="/src/assets/images/brandLogo1_3.svg" />
         <img src="/src/assets/images/brandLogo1_4.svg" />
         <img src="/src/assets/images/brandLogo1_5.svg" />


          {/* **** */}
        </div>

        {/* ***** */}
      </div>
    </section>
  );
};

export default HeroSection;
