import React from "react";
import { useNavigate } from "react-router-dom";
import { sectionImages } from "../data/home";
import "./HomeSections.css";

const GetInTouch = () => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="section-inner split">
        <div>
          <h2 className="section-heading section-heading--accent">
            Get In Touch With Us
          </h2>
          <p className="section-body">
            Tell us what you are running and what has failed. We will identify
            the right part, confirm it is the correct specification for your
            application, and get it to you from regional stock. For larger
            projects, we will assist with pump selection, layout, retrofitting
            and ongoing maintenance support.
          </p>
          <button className="btn btn--dark" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>

        <div className="split-media">
          <img
            src={sectionImages.getInTouch}
            alt="Team members bumping fists in a circle"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
