import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/bizu_logo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMobileMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollThreshold = windowHeight / 2;

      const opacity = 1 - (scrollPosition / scrollThreshold);
      setNavbarVisible(opacity > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`} style={{ opacity: navbarVisible ? 1 : 0 }}>
      <div className="navbar-logo" onClick={() => scrollToSection('home')}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar-menu navbar-container">
        <ul className="navbar-menu-items">
          <li className="navbar-item">
            <div className="navbar-link" onClick={() => scrollToSection('home')}>
              Home
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link" onClick={() => scrollToSection('about-us')}>
              About us
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link" onClick={() => scrollToSection('our-services')}>
              Our Services
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link" onClick={() => scrollToSection('our-team')}>
              Our Team
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobile ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
