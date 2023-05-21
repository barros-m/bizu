import React from 'react';
import video from '../../assets/videos/home_video_miami_beach.mp4';
import logo from '../../assets/images/bizu_logo.png';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">New era of Marketing.</h1>
        <p className="hero-description">Quality over quantity.</p>
      </div>
    </section>
  );
};

export default HeroSection;
