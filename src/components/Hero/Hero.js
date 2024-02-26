import React from 'react';
import video from '../../assets/videos/hero_video.mp4';
import logo from '../../assets/images/bizu_logo.png';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">New era of Marketing.<br/>Quality over quantity.</h1>
        {/* <p className="hero-description">Quality over quantity</p> */}
        <div style={{textAlign: 'center'}}>
          <a href="mailto:manuela@bizumarketing.com" className="contactButton">Contact Us!</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
