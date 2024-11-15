import React from "react";
import "./Services.css";
import Cards from "../Cards/Cards";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Services() {
  const cardData = [
    {
      icon: "/src/assets/images/serviceIcon1_1.svg", 
      title: "Woo commerce",
      description: "Description for service  Description for service  Description for service",
    },
    {
      icon: "/src/assets/images/serviceIcon1_2.svg", 
      title: "CRM solutions",
      description: "Description for service  Description for service  Description for service",
    },
    {
      icon: "/src/assets/images/serviceIcon1_3.svg",
      title: "Web design",
      description: "Description for service  Description for service  Description for service",
    },
    {
      icon: "/src/assets/images/serviceIcon1_4.svg", 
      title: "Data guard solution",
      description: "Description for service  Description for service  Description for service ",
    },
  ];

  return (
    <section className="service-section">
      <div className="service-wrapper">
        <div className="container">
          <div className="wrapp">
            <p> ← our services → </p>
            <div className="service-title">
              <h1>Business Innovation With IT Services</h1>
             <div>
             <FaArrowAltCircleLeft className="icon"/>
             <FaArrowAltCircleRight className="icon"/>
             </div>
            </div>

            <div className="cardat">
              {cardData.map((data, index) => (
                <Cards
                  key={index}
                  icon={<img src={data.icon} alt={data.title} />}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
