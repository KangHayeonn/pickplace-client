import { Outlet } from 'react-router-dom';
import '../../styles/layout.scss';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="layout-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
