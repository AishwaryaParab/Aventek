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
            Let&rsquo;s Discuss How We Can Support Your Business.
          </h2>
          <p className="section-body">
            Whether you&rsquo;re looking to streamline sourcing, strengthen
            supplier management, improve quality, or ensure on-time delivery,
            our team is ready to help.{" "}
            <strong>
              Connect with AVENTEK Engineering Services today and let&rsquo;s
              build a partnership that delivers results.
            </strong>
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
