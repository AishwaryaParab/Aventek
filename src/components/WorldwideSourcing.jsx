import React from "react";
import { sectionImages } from "../data/home";
import "./HomeSections.css";
import "./WorldwideSourcing.css";

const WorldwideSourcing = () => {
  return (
    <div className="section">
      <div className="section-inner split">
        <div className="split-media">
          <img
            src={sectionImages.sourcing}
            alt="Model aeroplane over a chalk drawing of the world map"
          />
        </div>

        <div>
          <p className="section-eyebrow">Worldwide Sourcing</p>
          <h2 className="section-heading">Worldwide Sourcing Partner</h2>
          <p className="section-body">
            We work as a procurement service provider for companies across the
            globe, with expertise in key manufacturing processes including
            forging, casting and machining. We understand the challenges
            involved in sourcing and work in partnership with our clients to
            address the risks and deliver results to the bottom line. With a
            strong regional presence in India, Aventek collaborates with
            worldwide customers to deliver significant and sustainable value in
            the procurement of their goods and services.
          </p>

          <div className="sourcing-regions">
            <span className="sourcing-label">Global deliveries to</span>
            <div className="sourcing-pills">
              <span className="sourcing-pill">USA</span>
              <span className="sourcing-pill">South East Asia</span>
              <span className="sourcing-pill">South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldwideSourcing;
