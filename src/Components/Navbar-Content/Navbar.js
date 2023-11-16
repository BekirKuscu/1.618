import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <header role="banner" className="ui-section-header">
        <div className="ui-layout-container">
          <div className="ui-section-header__layout ui-layout-flex">

            <Link to="/" role="link" aria-label="#" className="ui-section-header--logo">
              <img width="60" src="https://cdn.dribbble.com/users/179241/screenshots/6116810/chris-fernandez-electric-recycling-editorial-1-dribbble.png" alt="Logo" />
            </Link>
            <input type="checkbox" id="ui-section-header--menu-id" />
            <label htmlFor="ui-section-header--menu-id" className="ui-section-header--menu-icon"></label>

            <nav role="navigation" className="ui-section-header--nav ui-layout-flex">
              <Link to="/" role="link" aria-label="#" className="ui-section-header--nav-link">Home</Link>
              <Link to="/MoreInfo" role="link" aria-label="#" className="ui-section-header--nav-link">MoreInfo</Link>
              <Link to="/DonationsPage" className="ui-section-header--nav-link">Donations</Link>
              <a href="https://github.com/BEKIRKSU/1.618" role="link" aria-label="#" className="ui-section-header--nav-link">GitHub</a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
