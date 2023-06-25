import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import CompanyNumbers from './components/CompanyStats/CompanyNumbers';
import OurServices from './components/OurServices/OurServices';
import Testimonials from './components/Testimonials/Testimonials';
import { FaWhatsapp } from 'react-icons/fa';
import PortfolioGrid from './components/Portfolio/NewPortfolio/PortfolioGrid';
import CaseStudies from './components/CaseStudy/CaseStudies';

function App() {
  // Function to handle the click event of the WhatsApp button
  const handleWhatsAppClick = () => {
    // Implement your logic here to open the WhatsApp chat
    // For example, you can use window.open() with the WhatsApp URL
    window.open('https://api.whatsapp.com/send?phone=4705178837', '_blank');
  };

  return (
    <div className="App">
      <Navbar />

      <div>
        <Hero />
      </div>

      <div id="about-us">
        <AboutUs />
      </div>

      <div id="our-services">
        <OurServices />
      </div>

      <div id="stats">
        <section className="section section-numbers">
          <CompanyNumbers />
        </section>
      </div>

      <div id="portfolio">
        <section className="section section-numbers">
          <PortfolioGrid />
        </section>
      </div>

      <div id="case-studies">
        <section className="section section-numbers">
          <CaseStudies />
        </section>
      </div>

      <div id="testimonials">
        <section className="section section-testimonials">
          <Testimonials />
        </section>
      </div>

      <Footer />

      {/* Floating WhatsApp Button */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
      </button>
    </div>
  );
}

export default App;
