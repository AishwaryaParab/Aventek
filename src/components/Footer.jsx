import React from "react";
import logo from "../images/logo.png";
import "./Footer.css";
// import { FacebookOutlined } from "@mui/icons-material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-details">
        <div className="company-details">
          <img src={logo} alt="Aventek Engineering Solutions" />
          {/* <div className="socials">
            <a
              href="https://www.facebook.com/AventekEngineering"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlined className="facebook social-icon" />
            </a>
            <a
              href="https://in.linkedin.com/in/aventek-engineering-solutions-b9265523b"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="linkedin social-icon" />
            </a>
            <InstagramIcon className="instagram social-icon" />
            <YouTubeIcon className="youtube social-icon" />
          </div> */}
        </div>

        <div className="links">
          <h4>Quick Links</h4>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about")}>About</p>
          <p onClick={() => navigate("/services")}>Services</p>
          {/* <p onClick={() => navigate("/catalog")}>Products</p> */}
          <p onClick={() => navigate("/contact")}>Contact</p>
        </div>

        <div className="links footer-static">
          <h4>Worldwide Support Centre</h4>
          <p>Aventek Engineering Services,</p>
          <p>H.No 894 16, Shop No: AG S-2, Prabhu residency,</p>
          <p>Porvorim, North Goa, GOA &ndash; 403521</p>
          <p className="footer-gstin">
            Email: <a href="mailto:admin@aventek.in">admin@aventek.in</a>
          </p>
          <p>GSTN: 30ACFFA3259C1Z1</p>
          <p>PAN: ACFFA3259C</p>
        </div>

        <div className="links footer-static">
          {/* <h4>Regional Supply and Support</h4>
          <p>Mumbai | Hyderabad | Telangana</p>
          <p>Gujarat | Rajasthan | Kerala</p> */}

          <h4>Global Deliveries</h4>
          <p>USA | South East Asia | South Africa | Australia</p>
        </div>
      </div>

      <div className="copyright">
        <p>
          © {currentYear} Aventek Engineering Solutions LLP
          <span className="copyright-sep">|</span>
          <span
            className="copyright-link"
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </span>
          <span className="copyright-sep">|</span>
          <span
            className="copyright-link"
            onClick={() => navigate("/terms-and-conditions")}
          >
            Terms &amp; Conditions
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
