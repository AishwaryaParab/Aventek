import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { services } from "../data/home";
import {
  /* serviceLines, */
  qualityControl,
  vendorManagement,
} from "../data/services";
import "./HomeSections.css";
import "./ServicesOverview.css";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <h1 className="page-banner-title">Services</h1>
          <p className="page-banner-sub">
            We provide reliable, end-to-end outsourcing solutions that extend
            your capabilities, streamline operations, and deliver measurable
            value.
          </p>
        </div>
      </div>

      <div className="section section--alt">
        <div className="section-inner services-grid">
          {services.map((item) => (
            <div className="service-card" key={item.id}>
              <FontAwesomeIcon className="service-icon" icon={item.icon} />
              <h3 className="service-title">{item.title}</h3>
              <p className="service-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-inner detail-columns">
          <div>
            <h2 className="section-heading">Quality Control</h2>
            <ul className="check-list">
              {qualityControl.map((point, index) => (
                <li key={index}>
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-heading">Vendor Management</h2>
            <ul className="check-list">
              {vendorManagement.map((point, index) => (
                <li key={index}>
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
