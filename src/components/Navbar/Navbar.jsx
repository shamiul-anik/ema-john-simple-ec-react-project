import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div><img src={Logo} alt="Logo" /></div>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="nav-item">
            <Link to="/review">Order Review</Link>
          </li>
          <li className="nav-item">
            <Link to="/inventory">Manage Inventory</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;