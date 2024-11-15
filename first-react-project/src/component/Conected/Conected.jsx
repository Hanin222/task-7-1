import React from "react";
import "./Conected.css";

function Conected() {
  return (
    <section>
      <div className=" Conected-wrapper">
        <div className="container">
          <div className="Conected-item">
            <div className="conected-wrap">
              <div className="conect-img">
                <img src="/src/assets/images/ctaThumb.webp" />
              </div>
              <h2> Stay connected with cutting edge IT</h2>
              <div>
                <button className="btn-conect">Talk to specialist → </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conected;
