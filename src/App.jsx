import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Login from './components/Login/login';
import InformacionDocente from './components/Informacion_Docente/informacion_docente';
import ActividadesInstitucionales from './components/Actividades/actividades';
import "./index.css";
import CargaDeNotas from './pages/Carga_Notas/carga_notas';
import Observaciones from './pages/Observaciones/observaciones';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="informacion-docente" element={<InformacionDocente />} />
        <Route path="actividades" element={<ActividadesInstitucionales />} />
        <Route path="carga_notas" element={<CargaDeNotas />} />
        <Route path="observaciones" element={<Observaciones />} />

      </Route>
    </Routes>
  );
};

export default App;
