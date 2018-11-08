import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <nav>
      <div className="nav-wrapper">
      <a href="/" class="brand-logo">Movie Lists</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Movie</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;