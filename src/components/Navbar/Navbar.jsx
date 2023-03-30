import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div><img src={Logo} alt="Logo" /></div>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/order">Order</a>
          </li>
          <li className="nav-item">
            <a href="/review">Order Review</a>
          </li>
          <li className="nav-item">
            <a href="/inventory">Manage Inventory</a>
          </li>
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;