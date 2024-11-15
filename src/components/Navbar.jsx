import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';


const Navbar = ({contactSection}) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  }
  

  return (
    <div className="navbar">
        <div className="logo">
            <img onClick={() => navigate("/")} src={logo} alt="logo" />
        </div>
      
        <div className="nav-items">
            <Link to="/" className="item-name">Home</Link>
            <Link to="/catalog" className="item-name">Catalog</Link>
            <Link to="/services" className="item-name">Services</Link>
            <Link to="/about" className="item-name">About Us</Link>
            <Link to="/contact" className="item-name">Contact Us</Link>
            {/* <li className="item-name" onClick={() => scrollDown(contactSection)}>Contact Us</li> */}
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
