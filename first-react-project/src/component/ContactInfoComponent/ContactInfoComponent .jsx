import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './ContactInfoComponent .css'


function ContactInfoComponent () {
  return (
    <section>
        <div className="contact-info-section">
      <div className="container">
      
        <div className="contact-item">
          <div className="icon-and-text">
            <FaMapMarkerAlt className="icon" />
            <h4>Address</h4>
          </div>
          <p>123 Main Street, Your City</p>
        </div>

        
        <div className="contact-item">
          <div className="icon-and-text">
            <FaEnvelope className="icon" />
            <h4>Email</h4>
          </div>
          <p>example@email.com</p>
        </div>

  
        <div className="contact-item">
          <div className="icon-and-text">
            <FaPhoneAlt className="icon" />
            <h4>Phone</h4>
          </div>
          <p>+1 234 567 890</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default ContactInfoComponent 
