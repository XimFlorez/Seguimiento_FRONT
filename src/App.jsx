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
import Encuentros from './pages/Encuentros/encuentros';
import CargarDatos from './pages/Cargar_Datos/cargar_datos';
import SeguimientoFuncional from './pages/Seguimiento_Funcional/seguimiento_funcional';

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
        <Route path="encuentros" element={<Encuentros/>} />
        <Route path="cargar_datos" element={<CargarDatos/>}></Route>
        <Route path="seguimiento-funcional" element={<SeguimientoFuncional/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;

