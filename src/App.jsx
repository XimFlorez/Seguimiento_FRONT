import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Login from './components/Login/login';
import InformacionDocente from './components/Informacion_Docente/informacion_docente';
import ActividadesInstitucionales from './components/Actividades/actividades';
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="informacion-docente" element={<InformacionDocente />} />
        <Route path="actividades" element={<ActividadesInstitucionales />} />
      </Route>
    </Routes>
  );
};

export default App;
