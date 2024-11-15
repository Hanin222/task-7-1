
import React from "react";
import { Link } from "react-router-dom";
import "./Footercomponent .css";

function Footercomponent() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-container">
       
            <div className="footer-section about">
              <img src="/src/assets/images/logo.svg" className="footer-logo" />
              <p>
                Extech IT is a Phasellus ultrices aliquam volutpat ullamcorper
                laoreet neque, a lacinia curabitur lacinia mollis.
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

        
            <div className="footer-section quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/about"> » About</Link>
                </li>
                <li>
                  <Link to="/services"> » Our Services</Link>
                </li>
                <li>
                  <Link to="/blogs"> » Our Blogs</Link>
                </li>
                <li>
                  <Link to="/faq"> » FAQ's</Link>
                </li>
                <li>
                  <Link to="/contact"> » Contact Us</Link>
                </li>
              </ul>
            </div>

       
            <div className="footer-section recent-posts">
              <h3>Recent Posts</h3>
              <div className="post">
                <div>
                  <img src="/src/assets/images/footerThumb1_1.webp" />
                </div>
               <div className="text-fo">
               <p>
                  <i className="far fa-calendar-alt"></i> 15th April, 2024
                </p>
                <Link to="/post/1">
                  Top 5 Most Famous Technology Trend in 2024
                </Link>
               </div>
              </div>
              <div className="post">
                <div>
                  <img src="/src/assets/images/footerThumb1_2.webp" />
                </div>
            <div className="text-fo">
            <p>
                  <i className="far fa-calendar-alt"></i> 20th June, 2024
                </p>
                <Link to="/post/2">The Surfing Man Will Blow Your Mind</Link>
            </div>
              </div>
            </div>

    
            <div className="footer-section contact-us">
              <h3>Contact Us</h3>
              <p>
                <i className="far fa-envelope"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone"></i> +208-6666-0112
              </p>
              <div className="email-subscription">
                <input type="email" placeholder="Your email address" />
                <button>→</button>
              </div>
              <label className="privacy-checkbox">
                <input type="checkbox" /> I agree to the{" "}
                <Link to="/privacy">Privacy Policy</Link>.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© All Copyright 2024 by Extech .. code by © eng.Hanin Alomar </p>
        <ul>
          <li>
            <Link to="/terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footercomponent;
