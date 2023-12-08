import React from 'react';
import './OurMission.css';

const OurMission = () => {
  return (
    <section className="our-mission-section">
      <div className="ui-layout-container">
        {/* Section 1: Our Mission */}
        <div className="ui-section-our-mission__layout ui-layout-grid ui-layout-grid-2">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Mission Image"
            className="ui-image-half-left"
          />
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="ui-text-intro">
              At EcoScan, we believe in the power of recycling to create a sustainable future. Our mission is to revolutionize the recycling process by making waste classification easy and accessible for everyone. By leveraging cutting-edge image recognition technology, we aim to empower individuals to contribute actively to environmental conservation.
            </p>
          </div>
        </div>

        {/* Section 2: Our Impact */}
        <div className="ui-section-our-mission__layout ui-layout-grid ui-layout-grid-2">
          <div className="impact-content">
            <h2>Our Impact</h2>
            <p className="ui-text-intro">
              Recycling plays a crucial role in reducing environmental impact, conserving resources, and minimizing pollution. We envision a world where every person, irrespective of their background, can effortlessly participate in the recycling journey. Through EcoScan, we strive to bring about positive change and foster a collective commitment to a greener planet.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Impact Image"
            className="ui-image-half-left"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;