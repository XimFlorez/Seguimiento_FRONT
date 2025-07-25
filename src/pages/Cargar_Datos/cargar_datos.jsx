import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PopupCarga from '../../components/PopupCargar/PopupCarga';

export default function CargarDatos() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mostrarPopup, setMostrarPopup] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mostrar = params.get('popup') === '1';
    setMostrarPopup(mostrar);
  }, [location.search]);

  const cerrarPopup = () => {
    setMostrarPopup(false);
    navigate('/cargar_datos');
  };

  return (
    <div>
      <h1>Cargar Datos</h1>
      {mostrarPopup && <PopupCarga onClose={cerrarPopup} />}
    </div>
  );
}
