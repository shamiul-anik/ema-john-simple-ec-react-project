import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div><Link to="/"><img src={Logo} alt="Logo" /></Link></div>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="nav-item">
            <Link to="/review">Review</Link>
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