import React from 'react';
import logo from '../images/logo.jpg';
import "./Footer.css";
import { FacebookOutlined} from '@mui/icons-material';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import InstagramIcon  from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-details">
            <div className="company-details">
                <img src={logo} />
                <p>At Aventek, we strive to deliver authentic spare parts and provide expert advice with the latest material specifications.</p>
            </div>

            <div className="categories links">
                <h4>Categories</h4>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div className="useful-info links">
                <h4>Useful Information</h4>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div className="follow">
                <p>Follow Us - </p>
                <div className="socials">
                    <FacebookOutlined className="facebook social-icon" fontSize='large' />
                    <LinkedInIcon className="linkedin social-icon" fontSize='large' />
                    <InstagramIcon className="instagram social-icon" fontSize='large' />
                    <YouTubeIcon className="youtube social-icon" fontSize='large' />                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer