import React from "react";
import "./styles.css";
import { Contact, Footer, Home, Navbar, Slider } from "./components";
import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Services from "./components/Services";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/services" element={<Services />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
