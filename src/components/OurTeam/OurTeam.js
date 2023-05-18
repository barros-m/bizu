import React from 'react';
import './OurTeam.css';
import employee1 from '../../assets/images/manu.jpeg';
import { FaInstagram } from 'react-icons/fa';

const OurTeam = () => {
  const employees = [
    {
      id: 1,
      name: 'Manuela Brito',
      image: employee1,
      instagram: 'https://instagram.com/manuubritto',
    },
  ];

  return (
    <section className="our-team">
    <h2 className="our-team-title">Our Team</h2>
    <div className="employee-container">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
        <img src={employee.image} alt={employee.name} className="employee-image" />
        <div className="employee-info">
          <h3 className="employee-name">{employee.name.toUpperCase()}</h3>
          <a href={employee.instagram} target="_blank" rel="noopener noreferrer" className="employee-instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      ))}
    </div>
  </section>
  );
};

export default OurTeam;
