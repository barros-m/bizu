import React from 'react';
import './OurServices.css';

const OurServices = () => {
  const services = [
    {
        id: 1,
        title: 'Social Media Management',
        description: 'Boost your online presence with tailored social media strategies that drive growth and engagement.',
      },
      {
        id: 2,
        title: 'Video & Photography',
        description: 'Elevate your brand with stunning visuals captured by our professional video and photography team.',
      },
      {
        id: 3,
        title: 'Website Design & Development',
        description: 'Stand out online with custom, SEO-optimized websites that showcase your brand identity.',
      },
      {
        id: 4,
        title: 'SEO',
        description: 'Improve your search engine visibility and drive organic traffic with our effective SEO solutions.',
      },
      {
        id: 5,
        title: 'Paid Media',
        description: 'Amplify your brand with targeted paid media campaigns. We craft compelling ads for optimal exposure and lead generation.',
      },
      {
        id: 6,
        title: 'Graphic Design',
        description: 'Make a lasting impression with innovative designs that effectively communicate your brand message.',
      },
      {
        id: 7,
        title: 'Branding & Rebranding',
        description: 'Define or redefine your brand identity with our strategic branding and rebranding services.',
      },
      {
        id: 8,
        title: 'Copywriting',
        description: 'Capture your brand’s voice with engaging and persuasive copywriting that resonates with your audience.',
      },
      {
        id: 9,
        title: 'Customer Services',
        description: 'Enhance your customer satisfaction with our top-notch customer service solutions.',
      }
      
    // Add more services here as needed
  ];

  return (
    <section className="our-services">
      <div className='section-title'>Our Services</div>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
