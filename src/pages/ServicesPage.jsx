import React from "react";
import { Footer, GetInTouch, Navbar } from "../components";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default ServicesPage;
