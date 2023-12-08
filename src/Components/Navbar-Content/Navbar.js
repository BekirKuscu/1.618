import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <a href="https://www.github.com/BEKIRKSU/1.618" target="_blank" rel="noopener noreferrer">
          <img className="website-link" src="/Images/ecoscan.jpg" alt="GitHub" />
        </a>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOME
              <div className="underline"></div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/DonationsPage" className="nav-link">
              DONATIONS
              <div className="underline"></div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
