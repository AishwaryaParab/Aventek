import React from "react";
import "../styles.css";
import {
  ClientStories,
  // Features,
  Footer,
  GetInTouch,
  Hero,
  Navbar,
  Sectors,
  ServicesOverview,
  // Solutions,
  WorldwideSourcing,
} from "../components";

function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      {/* <Solutions /> */}
      <ServicesOverview />
      <WorldwideSourcing />
      <Sectors />
      <ClientStories />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Main;
