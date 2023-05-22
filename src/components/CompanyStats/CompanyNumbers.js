import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './CompanyNumbers.css'; 

const CompanyNumbers = () => {
  return (
    <section className="company-numbers">
      <h1 className="section-title">Our Key Numbers</h1>
    <div className="numbers">
      <div className="number-item">
        <CountUp start={0} end={6552834} delay={0}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h2>Paid Reach</h2>
      </div>
      {/* Repeat for the other statistics */}
      <div className="number-item">
        <CountUp start={0} end={33965} delay={0}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h2>New Instagram Followers</h2>
      </div>
      <div className="number-item">
        <CountUp start={0} end={497873} delay={0} prefix="$">
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h2>Clients Sales Revenue</h2>
      </div>
      <div className="number-item">
        <CountUp start={0} end={620664} delay={0}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h2>Page Visits</h2>
        
      </div>
    </div>
    </section>
  );
};

export default CompanyNumbers;

