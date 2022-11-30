import React from "react";
// import "./styles.css";
import { Contact, Footer, Home, Navbar, Slider } from "../components";

function Main() {
  return (
    <div className="Main">
        <Navbar />
        <Home />
        <Slider />
        <Contact />
        <Footer />
    </div>
  );
}

export default Main;
