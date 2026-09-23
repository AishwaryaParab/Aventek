import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSections.css";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            Beyond Outsourcing. True Business Partnership.
          </h1>
          <p className="hero-sub">
            We provide reliable, end-to-end outsourcing solutions that extend
            your capabilities, streamline operations, and deliver measurable
            value.
          </p>
          <button className="btn btn--accent" onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
      </div>

      <div className="section hero-intro">
        <div className="section-inner">
          <p className="section-body">
            <strong>AVENTEK Engineering Services</strong> is a global
            outsourcing partner delivering end-to-end engineering and supply
            chain solutions with a strong focus on strategic sourcing and
            supplier development.
          </p>
          <p className="section-body">
            We manage the complete procurement lifecycle, including contract
            management, supplier coordination, quality control, and performance
            monitoring.
          </p>
          <p className="section-body">
            Our structured approach ensures competitive sourcing, consistent
            quality, transparent supplier management, and strict adherence to
            specifications. With a commitment to on-time delivery and
            operational excellence, we work as an extension of our clients&rsquo;
            teams to create reliable, long-term business partnerships.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
