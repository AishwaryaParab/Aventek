import React from "react";
import { Footer, GetInTouch, Navbar } from "../components";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default AboutPage;
