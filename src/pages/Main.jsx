import React, { useRef } from "react";
import "../styles.css";
import { Contact, Footer, Home, Navbar, Slider, Strip } from "../components";

function Main() {
  return (
    <div className="Main">
        <Navbar />
        <Home />
        <Slider />
        <Strip />
        <Contact />
        <Footer />
    </div>
  );
}

export default Main;
