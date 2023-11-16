import React, { useState } from 'react';
import './DonationsPage.css';

const DonationsPage = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [totalAmount, setTotalAmount] = useState(100);

  const handleDonationChange = (event) => {
    const amount = parseFloat(event.target.value);
    setDonationAmount(amount || 0);
  };

  const handleDonateNow = () => {
    // Your donation processing logic can go here
    // For simplicity, let's just update the total amount for now
    setTotalAmount(totalAmount + donationAmount);
    // Reset the donation amount to default
    setDonationAmount(100);
  };

  return (
    <div>
      <h1>Donations</h1>
      <p className='donations-quote'>"Recycle for a greener tomorrow, donate to save lives today. Small actions, big impact."</p>
      <div>
        <p>"For just $10, you can plant 5 trees, helping combat deforestation and support a greener planet."</p>
        <p>"A donation of $1 a day provides clean water to a person in need, ensuring a healthier and more sustainable future."</p>
        <p>"A $10 donation can eliminate 500 plastic bottles from our oceans, contributing to a cleaner, healthier planet."</p>
      </div>
      <div className="donationsBox">
        <h2>Donation Box</h2>
        <p>Donation amount: £{donationAmount}</p>
        <p>Total: £{totalAmount}</p>

        <input
          type="number"
          value={donationAmount}
          onChange={handleDonationChange}
        />

        <button onClick={handleDonateNow}>Donate now</button>
      </div>
    </div>
  );
};

export default DonationsPage;
