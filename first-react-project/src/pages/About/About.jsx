import React from "react";
import HeroComponent from "../../component/HeroComponent/HeroComponent";
import ContactInfoComponent from "../../component/ContactInfoComponent/ContactInfoComponent ";
import MemberHteam from "../../component/MemberHteam/MemberHteam"

function About() {
  return (
    <div>
      <HeroComponent title="About Us" breadtcrumb="Home > About Us" />
      <MemberHteam />
      <ContactInfoComponent />
    </div>
  );
}

export default About;
