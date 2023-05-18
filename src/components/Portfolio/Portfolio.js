import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Portfolio.css';

import jurey0 from '../../assets/images/porfolio/psi_julianarey_0.jpg';
import jurey1 from '../../assets/images/porfolio/psi_julianarey_1.png';
import kikotattoo0 from '../../assets/images/porfolio/kiko_tattoo_rio_0.png';
import kikotattoo1 from '../../assets/images/porfolio/kiko_tattoo_rio_1.png';

import xande from '../../assets/images/porfolio/xande_negao_0.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: jurey0,
      title: 'Psychologist Juliana rey',
      link: 'https://instagram.com/psijulianarey',
    },
    {
      id: 2,
      image: kikotattoo0,
      title: 'Kiko Tattoo',
      link: 'https://www.kikotattoo.com/',
    },
    {
      id: 3,
      image: xande,
      title: 'XN Studio',
      link: 'https://instagram.com/xandenegao?igshid=MzRlODBiNWFlZA==',
    },
    {
      id: 4,
      image: jurey1,
      title: 'Psychologist Juliana rey',
      link: 'https://instagram.com/psijulianarey',
    },
    {
      id: 5,
      image: kikotattoo1,
      title: 'Kiko Tattoo',
      link: 'https://www.kikotattoo.com/',
    },
  ];

return (
    <section className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
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
