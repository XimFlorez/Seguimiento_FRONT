import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import { FaBars } from 'react-icons/fa';
import './layout.css';
import logo from '../../assets/img/logo-layout.png'; 


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="layout-container">

      {/* Header */}
      <header className="header">
        <button className="menu-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
          <img src={logo} alt="Logo" className="header-logo" />
      </header>



      {/* Body: Sidebar + Main Content */}
      <div className="body-container">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
