import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services, capabilities } from "../data/home";
import "./HomeSections.css";
import "./ServicesOverview.css";

const ServicesOverview = () => {
  return (
    <div className="section section--alt">
      <div className="section-inner">
        <h2 className="section-heading section-heading--center">
          Our Services
        </h2>
        <p className="services-tagline">
          Global excellence in outsourcing: quality parts, on time, every time.
        </p>

        <div className="services-grid">
          {services.map((item) => (
            <div className="service-card" key={item.id}>
              <FontAwesomeIcon className="service-icon" icon={item.icon} />
              <h3 className="service-title">{item.title}</h3>
              <p className="service-body">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="capabilities">
          {capabilities.map((group) => (
            <div className="capability" key={group.id}>
              <h3 className="capability-title">{group.title}</h3>
              {group.body.map((para, index) => (
                <p className="section-body" key={index}>
                  {para}
                </p>
              ))}
              <div className="capability-images">
                {group.images.map((image, index) => (
                  <div className="capability-image" key={index}>
                    <img
                      src={image.src ?? image}
                      style={image.position && { objectPosition: image.position }}
                      alt={`${group.title} component`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
