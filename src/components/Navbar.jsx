import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
      
        <div className="nav-items">
            <Link to="/catalog" className="item-name">Catalog</Link>
            <Link to="/services" className="item-name">Services</Link>
            <Link to="/about" className="item-name">About Us</Link>
            <Link to="/contact" className="item-name">Contact Us</Link>
        </div>

        <div onClick={() => {setIsMobile(!isMobile)}} className="nav-toggle" >
          {isMobile ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </div>

        <div className={isMobile ? "nav-items-mobile active" : "nav-items-mobile"}>
            <Link to="/catalog" className="item-name">Catalog</Link>
            <Link to="/services" className="item-name">Services</Link>
            <Link to="/about" className="item-name">About Us</Link>
            <Link to="/contact" className="item-name">Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
