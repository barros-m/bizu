import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Portfolio.css';

import jurey0 from '../../assets/images/porfolio/psi_julianarey_0.jpg';
import jurey1 from '../../assets/images/porfolio/psi_julianarey_1.png';
import kikotattoo0 from '../../assets/images/porfolio/kiko_tattoo_rio_0.png';
import kikotattoo1 from '../../assets/images/porfolio/kiko_tattoo_rio_1.png';

import xande from '../../assets/images/porfolio/xande_negao_0.jpg';
import xande1 from '../../assets/images/porfolio/xande_negao_1.jpg';

import gringa0 from '../../assets/images/porfolio/gringa_brasileira_0.png';
import gringa1 from '../../assets/images/porfolio/gringa_brasileira_1.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: jurey0,
      title: 'Psychologist Juliana Rey',
      link: 'https://instagram.com/psijulianarey',
    },
    {
      id: 2,
      image: kikotattoo0,
      title: 'Kiko Tattoo',
      link: 'https://www.instagram.com/kikotattoorio/',
    },
    {
      id: 3,
      image: xande,
      title: 'XN Studio',
      link: 'https://instagram.com/xandenegao/',
    },
    {
      id: 4,
      image: gringa0,
      title: 'Gringra Brasileira',
      link: 'https://www.instagram.com/gringa.brasileiraa/',
    },
    {
      id: 5,
      image: jurey1,
      title: 'Psychologist Juliana Rey',
      link: 'https://instagram.com/psijulianarey',
    },
    {
      id: 6,
      image: kikotattoo1,
      title: 'Kiko Tattoo',
      link: 'https://www.instagram.com/kikotattoorio/',
    },
    {
      id: 7,
      image: xande1,
      title: 'XN Studio',
      link: 'https://instagram.com/xandenegao/',
    },
    {
      id: 8,
      image: gringa1,
      title: 'Gringra Brasileira',
      link: 'https://www.instagram.com/gringa.brasileiraa/',
    },
  ];

return (
    <section className="portfolio">
      <div className='section-title'>Portfolio</div>
      <Carousel
        showThumbs={false}
        centerMode
        centerSlidePercentage={50}
        infiniteLoop
        useKeyboardArrows
        swipeable
        emulateTouch
        showIndicators={false}
        showStatus={false}
      >
        {projects.map((project) => (
          <div key={project.id} className="carousel-slide">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <p className="legend">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Portfolio;
