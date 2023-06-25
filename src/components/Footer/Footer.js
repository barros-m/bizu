import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/bizu_logo.png';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/bizumarketing" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/company/bizu-marketing/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/bizuagency" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
