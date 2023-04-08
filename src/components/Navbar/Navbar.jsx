import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
      </div>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/orders">Orders</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/review">Review</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;