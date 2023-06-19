import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../styles/components/layout/layout.scss';
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
