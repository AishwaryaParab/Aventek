import React from "react";
import { useNavigate } from "react-router-dom";
import { sectionImages } from "../data/home";
import "./HomeSections.css";

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="section-inner split">
        <div>
          <h2 className="section-heading">Our Solutions</h2>
          <p className="section-body">
            Whether you need a single critical spare, a full overhaul, or a
            sourcing partner for a project, our team works alongside you at
            every stage of your concrete business. Many operators lose days to
            parts that arrive late or fail early. Aventek holds critical stock
            across Pan India locations and provides online and on-site service
            support, retrofitting and overhauling, so you have equipment you can
            count on.
          </p>
          <button className="btn btn--dark" onClick={() => navigate("/services")}>
            Learn More
          </button>
        </div>

        <div className="split-media">
          <img
            src={sectionImages.solutions}
            alt="Hot steel billet being forged on an anvil"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
