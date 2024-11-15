import React, { useState } from "react";
import "./Pricing.css";
import PricingCard from "../PricingCard/PricingCard";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    {
      title: "Regular Plan",
      price: isYearly ? 49 * 12 : 49,
      duration: isYearly ? "Year" : "Month",
      features: [
        { text: "100 GB SSD Storage", included: true },
        { text: "Weekly Backups", included: true },
        { text: "Unlimited Free SSL", included: true },
        { text: "24/7 System Monitoring", included: true },
        { text: "Free Domain ($9.99 Value)", included: true },
        { text: "Frame 164236", included: false },
        { text: "20+ Payment Methods", included: false },
        { text: "Deployment and Support", included: false },
      ],
      highlighted: false,
      icon: "/src/assets/images/pricingIcon1_1.svg", 
    },
    {
      title: "Premium Plan",
      price: isYearly ? 99 * 12 : 99, 
      duration: isYearly ? "Year" : "Month",
      features: [
        { text: "200 GB SSD Storage", included: true },
        { text: "Daily Backups", included: true },
        { text: "Unlimited Free SSL", included: true },
        { text: "Priority System Monitoring", included: true },
        { text: "Free Domain ($9.99 Value)", included: true },
        { text: "Frame 164236", included: true },
        { text: "20+ Payment Methods", included: true },
        { text: "24/7 Support", included: true },
      ],
      highlighted: true,
      icon: "/src/assets/images/pricingIcon1_1.svg", 
    },

    {
        title: "Regular Plan",
        price: isYearly ? 49 * 12 : 49,
        duration: isYearly ? "Year" : "Month",
        features: [
          { text: "100 GB SSD Storage", included: true },
          { text: "Weekly Backups", included: true },
          { text: "Unlimited Free SSL", included: true },
          { text: "24/7 System Monitoring", included: true },
          { text: "Free Domain ($9.99 Value)", included: true },
          { text: "Frame 164236", included: false },
          { text: "20+ Payment Methods", included: false },
          { text: "Deployment and Support", included: false },
        ],
        highlighted: false,
        icon: "/src/assets/images/pricingIcon1_1.svg", 
      },
  ];
  
  const togglePricing = () => setIsYearly(!isYearly);

  return (
    <section>
      <div className="wrapper">
        <div className="diamond">
          <img src="/src/assets/images/pricingShape1_2.webp"  />
        </div>
        <div className="container">
          <div className="item-wrapper">
            <div className="sec-title">
              <p>← our services →</p>
              <h1>Our awesome pricing plans</h1>
              <div className="title-icon">
                <div className="para">
                  <button onClick={togglePricing} className={`pricing-toggle ${!isYearly ? 'active' : ''}`}>
                    Monthly
                  </button>
                  <button onClick={togglePricing} className={`pricing-toggle ${isYearly ? 'active' : ''}`}>
                    Yearly
                  </button>
                </div>
                <img src="/src/assets/images/pricingIcon1_2.svg" alt="Pricing Icon" />
                <p className="save">Save up to 25%</p>
              </div>
            </div>

           <div className="pricing-container">
              {plans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  duration={plan.duration}
                  features={plan.features}
                  highlighted={plan.highlighted}
                  icon={plan.icon} 
                />
              ))}
           </div>
          </div>
        </div>

        <div className="hand">
          <img src="/src/assets/images/pricingShape1_1.webp"  />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
