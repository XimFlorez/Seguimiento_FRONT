import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // lógica para cerrar sesión
    navigate('/');
  };

  return (
<div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
  {/* Usuario activo */}
  <div className="sidebar-user">
    <img src='../src/assets/img/usuario2.png' alt="Usuario" className="user-avatar" />
    <div className="user-info">
      <span className="user-role">Web Master</span><br></br>
      <span className="user-id">CC 123456789</span>
    </div>
    <hr className="divider" />
  </div>

  {/* Navegación */}
  <div className="sidebar-content">
    <nav className="sidebar-links">
      {/* <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink> */}
      <NavLink to="/informacion-docente" className={({ isActive }) => isActive ? 'active' : ''}>Información del Docente</NavLink>
      <NavLink to="/actividades" className={({ isActive }) => isActive ? 'active' : ''}>Actividades</NavLink>
      <NavLink to="/carga_notas" className={({ isActive }) => isActive ? 'active' : ''}>Carga de Notas</NavLink>
      <NavLink to="/observaciones" className={({ isActive }) => isActive ? 'active' : ''}>Observaciones</NavLink>
    </nav>

    {/* Logout */}
    <button className="logout-btn" onClick={handleLogout} title="Cerrar sesión">
      <FaSignOutAlt size={18} style={{ marginRight: '8px' }} />
      <span>Cerrar sesión</span>
    </button>
  </div>
</div>

  );
};

export default Sidebar;
