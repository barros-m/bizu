import React from 'react';
import './PortfolioGrid.css'; // Importing our CSS
import '../Portfolio.css'

import ju0 from '../../../assets/images/porfolio/psi_julianarey_0.jpg'
import ju1 from '../../../assets/images/porfolio/psi_julianarey_1.png'
import ju2 from '../../../assets/images/porfolio/psi_julianarey_2.png'

import bizu0 from '../../../assets/images/porfolio/bizu_0.png'
import bizu1 from '../../../assets/images/porfolio/bizu_1.png'
import bizu2 from '../../../assets/images/porfolio/bizu_2.png'

import xande0 from '../../../assets/images/porfolio/xande_negao_0.jpg'
import xande1 from '../../../assets/images/porfolio/xande_negao_1.jpg'
import xande2 from '../../../assets/images/porfolio/xande_negao_2.png'

import gringa0 from '../../../assets/images/porfolio/gringa_brasileira_0.png'
import gringa1 from '../../../assets/images/porfolio/gringa_brasileira_1.png'
import gringa2 from '../../../assets/images/porfolio/gringa_brasileira_2.png'

import kiko0 from '../../../assets/images/porfolio/kiko_tattoo_rio_0.png'
import kiko1 from '../../../assets/images/porfolio/kiko_tattoo_rio_1.png'
import kiko2 from '../../../assets/images/porfolio/kiko_tattoo_rio_2.png'

function PortfolioGrid() {

    const portfolio = [
        // { src: ju0, alt: 'JulianaReyPsychologist', details: 'Juliana Rey Psychologist', url: 'https://instagram.com/psijulianarey' },
        // { src: bizu0, alt: 'BizuAgency', details: 'Bizu Agency', url: '' },
        // { src: xande0, alt: 'Xande', details: 'XN Studio', url: 'https://instagram.com/xandenegao/' },
        // { src: gringa0, alt: 'GringaBrasileira', details: 'Gringa Brasileira', url: 'https://www.instagram.com/gringa.brasileiraa/' },
        // { src: kiko0, alt: 'KikoTattoo', details: 'Kiko Tattoo', url: 'https://www.instagram.com/kikotattoorio/' },

        // { src: ju1, alt: 'JulianaReyPsychologist', details: 'Juliana Rey Psychologist', url: 'https://instagram.com/psijulianarey' },
        // { src: bizu1, alt: 'BizuAgency', details: 'Bizu Agency', url: '' },
        // { src: xande1, alt: 'Xande', details: 'XN Studio', url: 'https://instagram.com/xandenegao/' },
        // { src: gringa1, alt: 'GringaBrasileira', details: 'Gringa Brasileira', url: 'https://www.instagram.com/gringa.brasileiraa/' },
        // { src: kiko1, alt: 'KikoTattoo', details: 'Kiko Tattoo', url: 'https://www.instagram.com/kikotattoorio/' },

        // { src: ju2, alt: 'JulianaReyPsychologist', details: 'Juliana Rey Psychologist', url: 'https://instagram.com/psijulianarey' },
        // { src: bizu2, alt: 'BizuAgency', details: 'Bizu Agency', url: '' },
        // { src: xande2, alt: 'Xande', details: 'XN Studio', url: 'https://instagram.com/xandenegao/' },
        // { src: gringa2, alt: 'GringaBrasileira', details: 'Gringa Brasileira', url: 'https://www.instagram.com/gringa.brasileiraa/' },
        // { src: kiko2, alt: 'KikoTattoo', details: 'Kiko Tattoo', url: 'https://www.instagram.com/kikotattoorio/' },

  { src: bizu1, alt: 'BizuAgency', details: 'Bizu Agency', url: '' },
  { src: bizu0, alt: 'BizuAgency', details: 'Bizu Agency', url: '' },
  { src: bizu2, alt: 'BizuAgency', details: 'Bizu Agency', url: '' },
  
  { src: gringa0, alt: 'GringaBrasileira', details: 'Gringa Brasileira', url: 'https://www.instagram.com/gringa.brasileiraa/' },
  { src: gringa1, alt: 'GringaBrasileira', details: 'Gringa Brasileira', url: 'https://www.instagram.com/gringa.brasileiraa/' },
  { src: gringa2, alt: 'GringaBrasileira', details: 'Gringa Brasileira', url: 'https://www.instagram.com/gringa.brasileiraa/' },
  
  { src: ju1, alt: 'JulianaReyPsychologist', details: 'Juliana Rey Psychologist', url: 'https://instagram.com/psijulianarey' },
  { src: ju0, alt: 'JulianaReyPsychologist', details: 'Juliana Rey Psychologist', url: 'https://instagram.com/psijulianarey' },
  { src: ju2, alt: 'JulianaReyPsychologist', details: 'Juliana Rey Psychologist', url: 'https://instagram.com/psijulianarey' },

  { src: kiko1, alt: 'KikoTattoo', details: 'Kiko Tattoo', url: 'https://www.instagram.com/kikotattoorio/' },
  { src: kiko0, alt: 'KikoTattoo', details: 'Kiko Tattoo', url: 'https://www.instagram.com/kikotattoorio/' },
  { src: kiko2, alt: 'KikoTattoo', details: 'Kiko Tattoo', url: 'https://www.instagram.com/kikotattoorio/' },

  { src: xande0, alt: 'Xande', details: 'XN Studio', url: 'https://instagram.com/xandenegao/' },
  { src: xande2, alt: 'Xande', details: 'XN Studio', url: 'https://instagram.com/xandenegao/' },
  { src: xande1, alt: 'Xande', details: 'XN Studio', url: 'https://instagram.com/xandenegao/' },

        // add more images as needed
    ];

  return (
    <section className="portfolio">
        <div className='section-title'>Portfolio</div>
        <div className="grid">
        {portfolio.map((item, index) => (
            // <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
            <div className="grid-item">
                <img src={item.src} alt={item.alt} className="grid-image" />
                <div className="overlay">
                <div className="text">{item.details}</div>
                </div>
            </div>
            // </a>
        ))}
        </div>
    </section>
  );
}

export default PortfolioGrid;
