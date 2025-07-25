import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import PopupCarga from '../../components/PopupCargar/PopupCarga'; 
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => navigate('/');

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Usuario */}
      <div className="sidebar-user">
        <img src="../src/assets/img/usuario2.png" alt="Usuario" className="user-avatar" />
        <div className="user-info">
          <span className="user-role">Web Master</span><br />
          <span className="user-id">CC 123456789</span>
        </div>
        <hr className="divider" />
      </div>

      {/* Links */}
      <div className="sidebar-content">
        <nav className="sidebar-links">
          {/* <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink> */}
          <NavLink to="/informacion-docente" className={({ isActive }) => isActive ? 'active' : ''}>Información del Docente</NavLink>
          <NavLink to="/encuentros"  className={({ isActive }) => isActive ? 'active' : ''}>Encuentros sincrónicos</NavLink>
          <NavLink to="/seguimiento-funcional"  className={({ isActive }) => isActive ? 'active' : ''}>Seguimiento Funcional</NavLink>
          <NavLink to="/actividades" className={({ isActive }) => isActive ? 'active' : ''}>Actividades</NavLink>
          <NavLink to="/carga_notas" className={({ isActive }) => isActive ? 'active' : ''}>Carga de Notas</NavLink>
          <NavLink to="/observaciones" className={({ isActive }) => isActive ? 'active' : ''}>Observaciones</NavLink>
          <a href="#" onClick={handleOpenPopup}>Cargar Datos</a>
        </nav>

        {/* Logout */}
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt size={18} style={{ marginRight: '8px' }} />
          <span>Cerrar sesión</span>
        </button>
      </div>

      {/* Popup (visible solo si está abierto) */}
      {showPopup && <PopupCarga onClose={handleClosePopup} />}
    </div>
  );
};

export default Sidebar;
