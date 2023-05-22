import React from 'react';
import img_kiko from '../../assets/images/testimonials/kiko.jpeg'
import img_chris from '../../assets/images/testimonials/chris.jpeg'
import img_bruna from '../../assets/images/testimonials/bruna.jpeg'
import './Testimonials.css'

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "I had a fantastic experience with BIZU agency that provided excellent service for my tattoo shop. They crafted a tailored strategy, created engaging content, and monitored my website and social media to ensure everything was functioning smoothly. Thanks to their expertise, my business saw a significant increase in traffic and revenue. I highly recommend them to any small business looking to improve their digital presence.",
      author: "Paulo B.",
      position: "Kiko Tattoo Company CEO & Founder",
      image: img_kiko
    },
    {
      id: 2,
      text: "I had a great experience working with BIZU for my gym. Their team was knowledgeable and professional, and they developed a customized strategy that helped me connect with potential clients and increase revenue. Their social media campaigns were particularly effective in targeting the right audience and growing my following. They also provided valuable guidance throughout the process and were always available to answer my questions. Overall, I was impressed with the agency's expertise and dedication to their clients. They helped me achieve my business goals and I would recommend them to any small business looking to improve their digital presence.",
      author: "Bruna B.",
      position: "XN CEO & Founder", 
      image: img_chris
    },
    {
      id: 3,
      text: "BIZU agency helped me improve my Instagram and attract more clients to my tattoo artistry business. Their customized strategy and engaging content increased my following and client base. Their valuable guidance and expertise are unmatched, and I highly recommend them to any small business looking to improve their social media presence.",
      author: "Chris G",
      position: "Tattoo Artist", 
      image: img_bruna
    }
    // Additional testimonials can be added here
  ];

  return (
    <section className="testimonials">
  <div className='section-title'>What Our Customers Say</div>
  {testimonialsData.map((testm) => (
    <div className="testimonial-card">
    <img className="testimonial-image" src={testm.image} alt={`${testm.author}'s photo`} />
    <div className="testimonial-content">
      <h3 className="testimonial-name">{testm.author}</h3>
      <h4 className="testimonial-position">{testm.position}</h4>
      <p className="testimonial-quote">“{testm.text}”</p>
    </div>
  </div>
  ))}
</section>

  );
}

export default Testimonials;
