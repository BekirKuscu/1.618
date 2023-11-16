import React from 'react';
import './MoreInfo.css';

const MoreInfo = () => {
  return (
    <div className="more-info-container">
      <div className="header">
        <div className="title">
          <h1>Why We Should Recycle</h1>
        </div>
      </div>
      <div className="image-sections">
        <div className="section">
          <div className="info-box">
            <img src="Images/Tomato.jpg" alt="Food Waste" />
            <div className="info-text">
              <h2>Food Waste</h2>
              <p>Remember to compost food waste for a greener tomorrow!</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="info-box">
            <img src="Images/WaterBottle.jpg" alt="Water Bottle" />
            <div className="info-text">
              <h2>Water Bottle</h2>
              <p>Dispose of plastic bottles responsibly by recycling them.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="info-box">
            <img src="Images/Can.jpg" alt="Aluminum Can" />
            <div className="info-text">
              <h2>Aluminum Can</h2>
              <p>Recycle aluminum cans to save energy and reduce waste.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-title">
          <h1>Environmental Benefits of Recycling</h1>
        </div>
        <p>
          Recycling is a crucial practice with numerous environmental benefits. It conserves natural resources by reducing the demand for raw materials, cutting energy consumption, and lowering greenhouse gas emissions. Waste reduction is a key outcome, extending the life of landfills and preventing harmful pollutants. Recycling also safeguards ecosystems by minimizing destructive practices like deforestation. Additionally, it creates jobs, fosters a circular economy, and promotes global cooperation for sustainable living. In essence, recycling is a collective effort that significantly contributes to a healthier planet.
        </p>
      </div>
    </div>
  );
};

export default MoreInfo;
