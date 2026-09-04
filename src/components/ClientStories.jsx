import React, { useState } from "react";
import { clientLogos, testimonials, sectionImages } from "../data/home";
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
            <h2 className="section-heading">Client Success Stories</h2>
            <p className="section-body">
              Our customers range from large ready-mix operators running fleets
              across multiple sites, to contractors who need a single machine
              back in service by Monday.
            </p>
          </div>

          <div className="split-media">
            <img
              src={sectionImages.clientStories}
              alt="Two business people shaking hands outside an office"
            />
          </div>
        </div>

        <div className="logo-row">
          {clientLogos.map((name) => (
            <div className="logo-tile" key={name}>
              {name}
            </div>
          ))}
        </div>

        <div className="testimonial">
          <p className="testimonial-quote">“{current.quote}”</p>
          <p className="testimonial-author">{current.author}</p>
          <p className="testimonial-role">{current.role}</p>

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
