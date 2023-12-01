import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <ul className="nav-list">
//                 <li className="nav-item">
//                     <Link to="/" className="nav-link">
//                         HOME
//                         <div className="underline"></div>
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/MoreInfo" className="nav-link">
//                         DEMO
//                         <div className="underline"></div>
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/DonationsPage" className="nav-link">
//                         DONATIONS
//                         <div className="underline"></div>
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// import React from 'react';


function Navbar() {
    return (
      <div>
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
             <a href="https://www.github.com/BEKIRKSU/1.618" target="_blank" rel="noopener noreferrer">
        <img className="website-link" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub" />
      </a>
            
          </nav>
      </div>
    );
  }
  



export default Navbar;
