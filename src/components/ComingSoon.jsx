import React from "react";
import "./ComingSoon.css";

import TypewriterComponent from "typewriter-effect";

const ComingSoon = () => {
  return (
    <div className="blur-section">
      <div className="blur-bg"></div>

      <div className="blur-text">
        <TypewriterComponent
          // onInit={(typewriter) => {
          //   typewriter.typeString('Coming Soon...').pauseFor(2000).deleteAll().loop(true).start();
          // }}
          options={{
            strings: ["Coming Soon...", "Stay Tuned..."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <p>
        For current requirement, contact - +91 8668550364, spares@aventek.in
      </p>
    </div>
  );
};

export default ComingSoon;
