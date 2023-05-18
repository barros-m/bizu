import React from 'react';
import './AboutUs.css';

// import image from '../assets/about-image.jpg';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
        BIZU Agency is dedication to the highest quality of digital marketing - is a unique combination of creativity, strategy, flexibility, and productivity. We have the solution by applying our digital marketing expertise and personalized strategy for your business. We believe good enough just isn’t enough. Our goal is to ensure our clients are easily satisfied with the very best.

        <br/><br/> Our purpose is to create memorable experiences. By changing the industry and setting new norms of professionalism and success, we will be global leaders in digital marketing services. Our main goal is to become one of the top marketing companies in the world, providing marketing strategies, digital sales solutions, and brand management. Miami Based. Internationally Known.

        </p>
      </div>
      {/* <img src={image} alt="About Us" className="about-us-image" /> */}
    </section>
  );
};

export default AboutUs;
