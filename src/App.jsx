import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Login from './components/Login/login';
import InformacionDocente from './pages/Informacion_Docente/informacion_docente';
import ActividadesInstitucionales from './pages/Actividades/actividades';
import "./index.css";
import CargaDeNotas from './pages/Carga_Notas/carga_notas';
import Observaciones from './pages/Observaciones/observaciones';
import { useEffect, useState } from "react";

const App = () => {
   const [mensaje, setMensaje] = useState("");

  // useEffect(() => {
  //   fetch("http://10.1.1.171:8001/api")
  //     .then((res) => res.json())
  //     .then((data) => setMensaje(data.mensaje))
  //     .catch((err) => console.error("Error:", err));
  // }, []);

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
