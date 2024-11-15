import React from "react";


function Cards({ icon, title, description }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a href="#" className="card-read-more">Read More » </a>
    </div>
  );
}

export default Cards;
