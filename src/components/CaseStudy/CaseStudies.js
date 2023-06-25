import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
    const studies = [
        {
            title: "KT RIO - Impressive Follower Growth and ROI for a Tattoo Studio in Brazil",
            summary: "We helped KT RIO, a Brazilian tattoo studio, expand online presence, attract new clients, and achieve impressive ROI through effective digital marketing.",
            description: "Kiko Tattoo RIO, a renowned studio in Rio de Janeiro, wanted to increase visibility and attract more customers. Our tailored marketing strategy focused on enhancing social media presence, resulting in over 10,000 new followers, stronger engagement, and an ROI of approximately R$ 232,892."
        },
        {
            title: "KT MIAMI - International Expansion for a Tattoo Studio in Miami",
            summary: "We assisted Kiko Tattoo MIAMI, a Miami-based tattoo studio, in expanding online presence, attracting an international audience, and achieving remarkable marketing results.",
            description: "KT MIAMI aimed to broaden its customer base by attracting international tourists and locals interested in tattoos. Our comprehensive marketing strategy significantly increased followers and generated a remarkable ROAS of approximately 145%, resulting in a return of approximately US$ 145,168."
        },
        {
            title: "CHRIS - Consistent Engagement and ROI Growth for an Independent Tattoo Artist",
            summary: "We helped CHRIS, an independent tattoo artist, strengthen social media engagement, increase visibility, and achieve impressive ROI.",
            description: "CHRIS, a talented tattoo artist specializing in unique feminine body art, wanted to expand their customer base and improve social media presence. Our authentic content strategy consistently increased engagement and followers, leading to a significant ROI of approximately R$ 156,536."
        }
    ];

    return (
        <section className="our-services">
            <div className="our-services-content">
                <div className="section-title">Case Studies</div>
                <div className="services-container">
                    {studies.map((study, index) => (
                        <div key={index} className="service-card">
                            <h2 className="service-title">{study.title}</h2>
                            <p className="service-summary">{study.summary}</p>
                            <p className="service-description">{study.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;
