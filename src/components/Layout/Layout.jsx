import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="main">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;