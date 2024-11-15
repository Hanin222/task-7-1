import React from "react";
import HeroComponent from "../../component/HeroComponent/HeroComponent";
import ContactInfoComponent from "../../component/ContactInfoComponent/ContactInfoComponent ";
import Contactitems from "../../component/Contactitems/Contactitems";

function ContactHo() {
  return (
    <div>
      <HeroComponent title="Contact Us" breadtcrumb="Home >Contact Us" />
      <Contactitems />
      <ContactInfoComponent />
    </div>
  );
}

export default ContactHo;
