import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faPersonDigging,
  faShieldHalved,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";
import { sectors } from "../data/home";
import "./HomeSections.css";
import "./Sectors.css";

const icons = {
  construction: faHelmetSafety,
  mining: faPersonDigging,
  defence: faShieldHalved,
  agriculture: faTractor,
};

const Sectors = () => {
  return (
    <div className="section">
      <div className="section-inner">
        <h2 className="section-heading section-heading--center">
          Sectors We Cater To
        </h2>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <div className="sector-card" key={sector.id}>
              <img
                className="sector-image"
                src={sector.image}
                alt={`${sector.title} sector`}
                loading="lazy"
              />
              <div className="sector-body">
                <FontAwesomeIcon
                  className="sector-icon"
                  icon={icons[sector.id]}
                />
                <h3 className="sector-title">{sector.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sectors;
