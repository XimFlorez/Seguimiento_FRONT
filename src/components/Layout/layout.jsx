// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import './layout.css';
// import Sidebar from './sidebar';

// const Layout = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />

//       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         {/* Header */}
//         <header style={{
//           backgroundColor:  '#e4e6e9',
//           padding: '1rem',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           borderBottom: '1px solid #ccc'
//         }}>
//           <span>👤 WebMaster</span>
//           <button style={{
//             padding: '0.5rem 1rem',
//             backgroundColor: '#e74c3c',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}>Cerrar sesión</button>
//         </header>

//         {/* Contenido dinámico */}
//         <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import './layout.css'; // Estilos externos

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
