import React from 'react';
import video from '../../assets/videos/home_video_miami_beach.mp4';
import './Hero.css';


const HeroSection = () => {
    return (
<section className="hero">
  <video className="hero-video" autoPlay muted loop>
    <source src={video} type="video/mp4" />
  </video>
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1 className="hero-title">Empower Your Business with BIZU Agency</h1>
    <p className="hero-description">Innovative Digital Marketing Solutions Tailored to Your Needs</p>
  </div>
</section>

    );
  };
  
  export default HeroSection;