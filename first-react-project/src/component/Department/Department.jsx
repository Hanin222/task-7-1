import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./Department.css";

function Department() {
  return (
    <section className="video-section">
      <div className="item-wrapper">
        <div className="container">
          <div className="image-container">
            <img
              src="/src/assets/images/image_4.jpg"
              alt="Section Image"
              className="section-image"
            />
            <div
              className="play-icon"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/shorts/zdmtUpmMmfw",
                  "_blank"
                )
              }
            >
              <FaPlayCircle />
            </div>
          </div>
        </div>
      </div>
    
      <div className="tDm-wrapper">
        <div className="container">
          <div className="wrap">
            <div className="content">
            <div className="item">
                <div className="number">01</div>
                <h3>   Requirement</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>

           
              <div className="item">
                <div className="number">02</div>
                <h3>UI/UX Design</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
              <div className="item">
                <div className="number">03</div>
                <h3>Prototype</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
              <div className="item">
                <div className="number">04</div>
                <h3>Development</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Department;
