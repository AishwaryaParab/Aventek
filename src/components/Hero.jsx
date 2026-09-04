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
            Keep your concrete equipment running with confidence.
          </h1>
          <p className="hero-sub">
            We look after your spares and service so that you can focus on
            finishing the job.
          </p>
          <button className="btn btn--accent" onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
      </div>

      <div className="section hero-intro">
        <div className="section-inner">
          <p className="section-body">
            <strong>Aventek Engineering Solutions LLP</strong> is a
            one-stop-shop for spare parts, maintenance and refurbishment related
            to all concrete equipment across India. Our team brings over 30
            years of experience in the concrete industry, and we use that
            know-how to offer high-end performance wear parts selected on the
            metallurgy of the part, not just the price tag.
          </p>
          <p className="section-body">
            With parts sourced from Europe, China and India and stock held
            across regional locations, Aventek provides tested components,
            technical guidance and on-site service support, so your equipment
            stays productive and your projects stay on schedule.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
