import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        HOME
                        <div className="underline"></div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/MoreInfo" className="nav-link">
                        DEMO
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
    );
};

export default Navbar;
