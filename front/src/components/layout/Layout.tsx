import { Outlet } from 'react-router-dom';
import '../../styles/layout.scss';
import React from 'react';

const Layout = () => {
  return (
    <div className="layout-container">
      <Outlet />
    </div>
  );
};

export default Layout;
