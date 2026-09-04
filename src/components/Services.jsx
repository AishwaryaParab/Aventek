import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  serviceLines,
  qualityControl,
  vendorManagement,
} from "../data/services";
import "./HomeSections.css";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <h1 className="page-banner-title">Services</h1>
          <p className="page-banner-sub">
            Spares, sourcing, consultancy and overhauling for concrete
            equipment, backed by regional stock and on-site support.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-inner service-grid">
          {serviceLines.map((item, index) => (
            <div className="service-line" key={item.id}>
              <div className="service-line-head">
                <FontAwesomeIcon
                  className="service-line-icon"
                  icon={item.icon}
                />
                <span className="service-line-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="service-line-title">{item.title}</h2>
              <p className="section-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section section--alt">
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
