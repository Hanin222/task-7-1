import React from "react";
import "./MemberHteam.css";
import { FaShareAlt } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    image: "/src/assets/images/04.webp",
    name: "John Doe",
    position: "Project Manager",
  },
  {
    id: 2,
    image: "/src/assets/images/05.webp",
    name: "Jane Smith",
    position: "Lead Developer",
  },
  {
    id: 3,
    image: "/src/assets/images/06.webp",
    name: "Alice Johnson",
    position: "UI/UX Designer",
  },
  {
    id: 4,
    image: "/src/assets/images/07.webp",
    name: "Michael Brown",
    position: "QA Engineer",
  },
];

function MemberHteam() {
  return (
    <section>
      <div className="tm-wrapper">
        <div className="tm-img">
          <img src="/src/assets/images/asterisk.svg" />
          <h2>Technology</h2>
        </div>
        <div className="tm-img">
        <img src="/src/assets/images/asterisk.svg" />
          <h2> Cyber security</h2>
        </div>

        <div className="tm-img">
        <img src="/src/assets/images/asterisk.svg" />
          <h2>Data siance</h2>
        </div>

        <div className="tm-img">
        <img src="/src/assets/images/asterisk.svg" />
          <h2>Design</h2>
        </div>
      </div>
      <div className="team-section">
        <div className="container">
          <div className="tem-head">
            <div className="tem-titl">
              <p>← Team member →</p>
              <h1>Meet our dedcated team member</h1>
            </div>

            <div>
              <button className="btn-tem">All members → </button>
            </div>
          </div>
          <div className="team-cards-container">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-info">
                  <h3 className="team-name">
                    {member.name} <FaShareAlt className="share-icon" />
                  </h3>
                  <p className="team-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="inavto">
        <div>
          <p>────────── +1k Brand trust us ──────────</p>
        </div>
        <div className="envato">
         <h3>envato</h3>
         <h3>envato</h3>
         <h3>envato</h3>
         <h3>envato</h3>
         <h3>envato</h3>
        </div>
      </div>
    </section>
  );
}

export default MemberHteam;
