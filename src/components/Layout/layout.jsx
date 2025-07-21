import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import './layout.css'; 

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="header">
        <span className="user-name">👤 WebMaster</span>
      </header>

      {/* Body: Sidebar + Main Content */}
      <div className="body-container">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
