import { Outlet } from 'react-router-dom';
import '../../styles/layout.scss';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

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
