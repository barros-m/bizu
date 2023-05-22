import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import CompanyNumbers from './components/CompanyStats/CompanyNumbers';
import OurTeam from './components/OurTeam/OurTeam';
import OurServices from './components/OurServices/OurServices';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import { FaWhatsapp } from 'react-icons/fa';

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

      <div id="our-team">
        <CompanyNumbers />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="testimonials">
        <Testimonials />
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
