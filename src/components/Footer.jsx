import React from 'react';
import logo from '../images/logo.jpg';
import "./Footer.css";
import { FacebookOutlined} from '@mui/icons-material';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import InstagramIcon  from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  const navigate = useNavigate();

  return (
    <div className="footer">
        <div className="footer-details">
            <div className="company-details">
                <img src={logo} />
                <p>At Aventek, we strive to deliver authentic spare parts and provide expert advice with the latest material specifications.</p>
            </div>
{/* 
            <div className="categories links">
                <h4>Categories</h4>
                <p onClick={() => navigate('/about')}>About Us</p>
                <p onClick={() => navigate('/contact')}>Contact Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div> */}

            <div className="useful-info links">
                <h4>Useful Information</h4>
                <p onClick={() => navigate('/about')}>About Us</p>
                <p onClick={() => navigate('/contact')}>Contact Us</p>
                <p onClick={() => navigate('/terms-and-conditions')}>Terms and Conditions</p>
                <p onClick={() => navigate('/privacy-policy')}>Privacy Policy</p>
            </div>

            <div className="follow">
                <p>Follow Us - </p>
                <div className="socials">
                    <a href="https://www.facebook.com/AventekEngineering" target="_blank"><FacebookOutlined className="facebook social-icon" fontSize='large' /></a>
                    <a href="https://in.linkedin.com/in/aventek-engineering-solutions-b9265523b" target="_blank"><LinkedInIcon className="linkedin social-icon" fontSize='large' /></a>
                    <InstagramIcon className="instagram social-icon" fontSize='large' />
                    <YouTubeIcon className="youtube social-icon" fontSize='large' />                    
                </div>
            </div>
        </div>

        <div className="copyright">
            <p>©️ {currentYear} Aventek Engineering Solutions LLP</p>
        </div>
    </div>
  )
}

export default Footer