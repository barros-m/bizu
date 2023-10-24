import './CompanyNumbers.css';  
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CompanyNumbers() {
  const numbers = [
    {
      number: 6913386,
      text: "Paid Reach",
      duration: 5
    },
    {
      number: 37908,
      start: 10000,
      text: "New Instagram Followers",
      duration: 3
    },
    {
      number: 657931,
      start:  300000,
      text: "Clients Sales Revenue",
      prefix: '$',
      duration: 2
    },
    {
      number: 620664,
      start:  100000,
      text: "Page Visits",
      duration: 4
    }
  ];

  const [visible, setVisible] = useState(false);

  return (
    <section className="company-numbers">
        <h1 className="section-title">Our Key Numbers</h1>
        <VisibilitySensor 
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible) {
              setVisible(true);
            }
          }}>
          <div className="numbers">
            {
              numbers.map((item, index) => (
                  <div className="number-item" key={index}>
                      <CountUp 
                        start={visible ? (item.start || 0) : null}
                        end={item.number} 
                        duration={item.duration} 
                        prefix={item.prefix || ''} />
                      <h2>{item.text}</h2>
                  </div>
              ))
            }
          </div>
        </VisibilitySensor>
    </section>
  );
}

export default CompanyNumbers;
