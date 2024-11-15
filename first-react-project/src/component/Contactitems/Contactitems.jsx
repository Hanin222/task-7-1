import React from "react";
import "./Contactitems.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contactitems() {
  return (
    <section>
      <div className="cont-wrapper">
        <div className="container">
          <div className="contact-infos">
            <div className="infos-wrapper">
              <div className="infos-comuncation">
                <div className="contact-item-infos">
                  <div>
                    <FaMapMarkerAlt className="icon-infos" />
                  </div>
                  <div className="text-infos">
                    <h4>Address</h4>
                    <p>123 Main Street, Your City</p>
                  </div>
                </div>

                <div className="contact-item-infos">
                  <div>
                    <FaEnvelope className="icon-infos" />
                  </div>
                  <div className="text-infos">
                    <h4>Email</h4>
                    <p>example@email.com</p>
                  </div>
                </div>

                <div className="contact-item-infos lst-itm">
                  <div>
                    <FaPhoneAlt className="icon-infos" />
                  </div>
                  <div className="text-infos">
                    <h4>Phone</h4>
                    <p>+1 234 567 890</p>
                  </div>
                </div>
              </div>
              <div className="vido-infos">
                <img src="/src/assets/images/video.webp" alt="" />
              </div>
            </div>

            <div className="contact-mels">
              <div className="infos-titl">
                <h2>Ready to get started?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam repellat fugiat optio quam, consequatur est? Architecto
                  aut saepe delectus nisi maxime perspiciatis reiciendis eveniet
                  dolores rem, sapiente quod asperiores maiores.
                </p>
              </div>
              <div className="infos-frm">
                <div className="infos-nm">
                 <div>
                 <h5>Your name*</h5>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="enter your name"
                  />
                 </div>

                 <div>
                    <h5>
                        Your email*
                    </h5>
                 <input type="email" name="email" id="email" placeholder="enter your email" />
                 </div>
                </div>
                <div className="txtarea">
                    <h5>
                        Write message*
                    </h5>
                  <textarea name="tarea" id="tarea" ></textarea>
                </div>
              </div>
              <div >
                <button type="submit" className="infos-btn"> Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conHmap">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.2054624053208!2d-0.3753299238704137!3d51.87546197189939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487637d0e4f706d5%3A0x2e06e7f34ad91ad0!2sLondon%20Luton%20Airport!5e0!3m2!1snl!2snl!4v1731694565530!5m2!1snl!2snl"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contactitems;
