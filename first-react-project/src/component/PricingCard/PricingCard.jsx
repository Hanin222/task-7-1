import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import "./PricingCard.css";

function PricingCard({ title, price, duration, features, icon, highlighted }) {
  return (
    <div className={`pricing-card ${highlighted ? "highlighted" : ""}`}>
      <div className="card-header">
        <div>
          <h3>{title}</h3>
          <div className="detl">
            <h2>${price}</h2>
            <div>
              <h5>/{duration} </h5>
            </div>
          </div>
        </div>
        <div>
          {icon && (
            <div className="card-icon">
              <img src={icon} alt="Card Icon" />
            </div>
          )}
        </div>
      </div>
      <div className="featr">
        <ul className="features-list">
          {features.map((feature, index) => (
            <li
              key={index}
              className={feature.included ? "included" : "excluded"}
            >
              <div className={feature.included ? "check-icon" : "cross-icon"}>
                {feature.included ? "✓" : "✘"}
              </div>{" "}
              {feature.text}
              <div className="question-icon">
                <FaRegQuestionCircle size={18} color="#18185e" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="cta-button">Get Started Now →</button>
    </div>
  );
}

export default PricingCard;
