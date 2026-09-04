import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutImages, teamParagraphs, whyChooseUs } from "../data/about";
import "./HomeSections.css";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <h1 className="page-banner-title">About Us</h1>
          <p className="page-banner-sub">
            Engineers who know the parts, the markets and the machines they go
            into.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-inner split">
          <div>
            <h2 className="section-heading">Dynamic Team</h2>
            {teamParagraphs.map((para, index) => (
              <p className="section-body" key={index}>
                {para}
              </p>
            ))}
          </div>

          <div className="split-media">
            <img
              src={aboutImages.team}
              alt="Engineering team working together around a table"
            />
          </div>
        </div>
      </div>

      <div className="section section--alt">
        <div className="section-inner">
          <h2 className="section-heading section-heading--center">
            Why Choose Us
          </h2>

          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div className="why-card" key={item.id}>
                <FontAwesomeIcon className="why-icon" icon={item.icon} />
                <h3 className="why-title">{item.title}</h3>
                <p className="why-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
