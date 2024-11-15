import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>Services</h1>
      </div>

      <div className="services-content">
        <div className="services-row1">
          <p>
            <span>1. One-Stop Destination for all Concrete Requirements</span>
            <br />
            We offer premium quality pump spares, industrial pumps and related
            accessories in accordance with the international market standards.
            These parts are available for all concreting requirements at
            affordable rates.
          </p>
          <br />
          <p>
            <span>2. Worldwide Sourcing Partner</span>
            <br />
            We as a procurement service provider focus on delivering
            sustainable value to our clients. While offering a complete sourcing
            service to companies across the globe, we understand the challenges
            involved and work in partnership to address the risks and deliver
            results to the bottom line. We have special expertise in key
            manufacturing processes e.g Forging, Casting, Machining etc.
          </p>

          <br />
        </div>

        <div className="services-row2">
          <p>
            <span>3. Consultancy for Custom Pumps and Layout</span>
            <br />
            Our adept team of spare technicians provide expert assistance in
            choosing the right pumps and layout for your specific applications.
            The aim is to identify and satisfy your needs with high-efficiency,
            authentic and reliable pump operations.
          </p>
          <br />
          <p>
            <span>4. Retrofitting and Overhauling</span> <br />
            Aventek Engineering Solutions gives the assurance of timely online
            and on-site equipment service support, repairs and maintenance for
            all kinds of machines with our retrofitting and overhauling
            solutions to minimize component wear and maximize operational life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
