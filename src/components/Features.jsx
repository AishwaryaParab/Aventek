import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { features } from "../data/home";
import "./HomeSections.css";
import "./Features.css";

const Features = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="section section--alt">
      <div className="section-inner feature-grid">
        {features.map((item, index) => {
          const isOpen = openId === item.id;

          return (
            <div className="feature-card" key={item.id}>
              <div className="feature-icon-wrap">
                <span className="feature-number">{index + 1}</span>
                <FontAwesomeIcon className="feature-icon" icon={item.icon} />
              </div>

              <button
                className="feature-toggle"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`feature-panel-${item.id}`}
              >
                <FontAwesomeIcon
                  className={
                    isOpen ? "feature-caret feature-caret--open" : "feature-caret"
                  }
                  icon={faChevronRight}
                />
                <span className="feature-title">{item.title}</span>
              </button>

              <div
                id={`feature-panel-${item.id}`}
                className={isOpen ? "feature-panel feature-panel--open" : "feature-panel"}
              >
                <p className="feature-body">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
