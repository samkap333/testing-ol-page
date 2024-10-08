import React from 'react';
import logo from '../assets/Ocena-Logo.png';
import { RiTwitterXLine } from 'react-icons/ri'; 
import { FaFacebook, FaLinkedin} from 'react-icons/fa6'; 
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <div className="right">
        <p>Contact Information</p>
        <p>Phone: +91-8476912345</p>
        <p>Email: Hr@ocena.in</p>

        {/* Social media icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61555417004965" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/ocena-smart-solutions/about/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Ocenasolutions" target="_blank" rel="noopener noreferrer">
            <RiTwitterXLine /> {/* Replace FaTwitterSquare with FaXmark for the new Twitter logo */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
