import React from "react";
import "./Home.css";
import CircleCta from "./CircleCta";
import { cta } from "../data/cta";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <p className="home-para">
          <span>Aventek Engineering Solutions LLP</span>, is a one-stop-shop for
          Spare parts, Maintenance and Refurbishment related to all concrete
          equipment across India. The team driving this enterprise has over 30
          years of experience in the concrete industry and is looking forward to
          use this know-how to offer high-end performance wear parts,
          considering the metallurgy of the parts. The parts are sourced from
          Europe, China and India and are rigorously tested and offered at
          optimum price to end users.
        </p>

        <p className="home-para">
          Trust is what we believe in and provide transparency and technical
          competency to our customers, which ensures you have a reliable partner
          to depend on, for the upkeep of your concrete equipment and also
          solution provider for your projects. We provide you with our
          assistance at every stage of your concrete business. We aim at
          delivering immense value for the enhanced safety and lifelong
          operation of your concrete equipment.
        </p>

        <p className="home-para">
          With strong regional presence in India, Aventek collaborates with
          worldwide customers to provide procurement services, delivering
          significant and sustainable value to organisations in the procurement
          of their goods and services.
        </p>

        <div className="cta-section">
          {cta?.map((item) => {
            return (
              <CircleCta
                key={item.id}
                icon={item.icon}
                cta={item.cta}
                navigateto={item.navigate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
