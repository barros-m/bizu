import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
    const studies = [
        {
            title: "KT RIO - Impressive Follower Growth and ROI for a Tattoo Studio in Brazil",
            summary: "Through an effective digital marketing strategy, we helped KT RIO, a renowned tattoo studio in Brazil, expand their online presence, attract new clients, and achieve an impressive return on investment (ROI).",
            description: "Kiko Tattoo RIO, a Rio de Janeiro-based tattoo studio, aimed to increase their visibility and attract a larger customer base. With a tailored marketing strategy, our efforts focused on enhancing their social media presence. During our collaboration, we successfully grew their follower base by over 10,000, strengthening engagement and the brand's reputation. Additionally, the strategy resulted in an impressive ROI of approximately R$ 232,892, showcasing the campaign's success and its impact on business growth."
        },
        {
            title: "KT MIAMI - International Expansion for a Tattoo Studio in Miami",
            summary: "Through a global marketing strategy, we assisted Kiko Tattoo MIAMI, a tattoo studio in Miami, in expanding their online presence, attracting an international audience, and achieving remarkable results in their marketing campaign.",
            description: "KT MIAMI aimed to expand their customer base and attract international tourists and locals interested in tattoos. Employing a comprehensive marketing strategy, we significantly increased their follower count, leading to broader brand exposure. Furthermore, the marketing campaign generated a remarkable Return on Ad Spend (ROAS) of approximately 145%, with the company gaining an impressive return of approximately US$ 145,168 in their marketing efforts. These results demonstrate the effectiveness of the strategy in reaching and engaging a global audience."
        },
        {
            title: "CHRIS - Consistent Engagement and ROI Growth for an Independent Tattoo Artist",
            summary: "Through a personalized marketing strategy, we helped CHRIS, a talented independent tattoo artist, strengthen their social media engagement, increase visibility, and achieve impressive ROI in their business.",
            description: "CHRIS, a tattoo artist specializing in unique feminine body art, aimed to expand their customer base and establish a stronger social media presence. Implementing an authentic and relevant content strategy, we consistently increased engagement among their followers, resulting in significant growth in interactions and followers. Moreover, the implemented marketing strategy generated a considerable ROI of approximately R$ 156,536, highlighting the effectiveness of the executed actions and their positive impact on CHRIS' business outcomes."
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
