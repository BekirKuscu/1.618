import React, { useState } from 'react';
import './DonationsPage.css';

const DonationsPage = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [totalAmount, setTotalAmount] = useState(100);
  const [selectedTime, setSelectedTime] = useState('weekly');
  const [selectedAmount, setSelectedAmount] = useState('$10');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`You selected to donate ${selectedAmount} ${selectedTime}.`);
  };

  const handleDonateNow = () => {
    setTotalAmount(totalAmount + parseInt(donationAmount, 10)); 
    setDonationAmount(100);
  };

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  };

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nature Image"
        className="nature-image"
      />
      <h1>Donations</h1>
      <p className='donations-quote'>"Recycle for a greener tomorrow, donate to save lives today. Small actions, big impact."</p>
      <div className="donationsBox">
        <h2>Donate Now</h2>
        <div className="time-toggle">
          <div className="time-option">
            <input
              type="radio"
              id="weekly"
              name="time"
              value="weekly"
              checked={selectedTime === 'weekly'}
              onChange={handleTimeChange}
            />
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div className="time-option">
            <input
              type="radio"
              id="monthly"
              name="time"
              value="monthly"
              checked={selectedTime === 'monthly'}
              onChange={handleTimeChange}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className="time-option">
            <input
              type="radio"
              id="oneOff"
              name="time"
              value="oneOff"
              checked={selectedTime === 'oneOff'}
              onChange={handleTimeChange}
            />
            <label htmlFor="oneOff">One-off</label>
          </div>
        </div>

        <div className="amount-selector">
          <select value={selectedAmount} onChange={handleAmountChange}>
            <option value="$5">£5</option>
            <option value="$10">£10</option>
            <option value="$20">£20</option>
            <option value="$50">£50</option>
            <option value="$100">£100</option>
            <option value="$100000000">£100,000,000</option>
          </select>
        </div>
        <button className="donate-button" onClick={handleSubmit}>
          Donate
        </button>
      </div>
      <div className="donation-image"></div>
      {/* Uncomment the following section if you want to include the donation amount input and donate now button */}
      {/* <div>
        <p>Donation amount: £{donationAmount}</p>
        <p>Total: £{totalAmount}</p>

        <input
          type="number"
          value={donationAmount}
          onChange={handleDonationChange}
        />

        <button onClick={handleDonateNow}>Donate now</button>
      </div> */}
    </div>
  );
};

export default DonationsPage;
