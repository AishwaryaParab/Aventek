import React, { useState } from "react";
import { /* clientLogos, */ testimonials, sectionImages } from "../data/home";
import "./HomeSections.css";
import "./ClientStories.css";

const ClientStories = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <div className="section section--alt">
      <div className="section-inner">
        <div className="split stories-head">
          <div>
            <p className="section-eyebrow">Partnership-focused</p>
            <h2 className="section-heading">
              Building Success Across Industries.
            </h2>
            <p className="section-body">
              Trusted by clients in Construction, Mining, and Shipbuilding to
              deliver quality, reliability, and on-time performance.
            </p>
          </div>

          <div className="split-media">
            <img
              src={sectionImages.clientStories}
              alt="Two business people shaking hands outside an office"
            />
          </div>
        </div>

        {/* <div className="logo-row">
          {clientLogos.map((name) => (
            <div className="logo-tile" key={name}>
              {name}
            </div>
          ))}
        </div> */}

        <div className="testimonial">
          <p className="testimonial-quote">“{current.quote}”</p>
          <p className="testimonial-author">{current.author}</p>
          <p className="testimonial-role">{current.role}</p>
          {current.company && (
            <p className="testimonial-role">{current.company}</p>
          )}

          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                className={
                  index === active ? "story-dot story-dot--active" : "story-dot"
                }
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStories;
