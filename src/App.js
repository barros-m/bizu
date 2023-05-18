import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import OurTeam from './components/OurTeam/OurTeam';
import OurServices from './components/OurServices/OurServices';

function App() {
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
          <OurTeam />
        </div>


        
        <Footer />
      </div>
  );
}

export default App;
