import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // lógica para cerrar sesión
    navigate('/');
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-links">
        <Link to="/">Login</Link>
        <Link to="/informacion-docente">Información del Docente</Link>
        <Link to="/actividades">Actividades</Link>
      </nav>

      <button className="logout-btn" onClick={handleLogout} title="Cerrar sesión">
        <FaSignOutAlt size={18} />
      </button>
    </div>
  );
};

  export default Sidebar;
