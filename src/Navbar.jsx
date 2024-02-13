// Navbar.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home Page</Link>
        </li>
        <li className="nav-item">
          <Link to="/arexchart" className="nav-link">ArexChart</Link>
        </li>
        <li className="nav-item">
          <Link to="/tradingwiev" className="nav-link">Trading Wiev</Link>
        </li>
      </ul>
    </nav>
<Outlet />
    </>
  );
};

export default Navbar;

