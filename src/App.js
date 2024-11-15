import React from "react";
import "./styles.css";
import { Contact, Footer, Home, Navbar, Slider } from "./components";
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CatalogPage from "./pages/CatalogPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <div className="App">
      <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
