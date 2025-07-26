import './popup.css';
import React, { useState } from 'react';
import { migrarArchivo } from '../../services/migracionService'; 
import Swal from 'sweetalert2';

const PopupCarga = ({ onClose }) => {
  const [archivo, setArchivo] = useState(null);
  const [cargando, setCargando] = useState(false);

  const manejarCambioArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

  const manejarCarga = async () => {
    if (!archivo) {
      Swal.fire("Error", "Debes seleccionar un archivo Excel", "warning");
      return;
    }

    setCargando(true);

    try {
      const resultado = await migrarArchivo(archivo);

      await Swal.fire("Éxito", resultado.message || "Archivo cargado", "success");

      onClose(); // Cierra el popup

    } catch (error) {
      console.error("Error al subir archivo:", error);
      Swal.fire("Error", error.message || "Error al subir el archivo", "error");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Carga tu archivo</h2>
        <img src="src/assets/img/icons8-excel-48.png" alt="Excel Icon" />
        <div className="input-file">
          <label>
            <input 
              type="file" 
              name="hecho" 
              accept=".xlsx,.xls" 
              onChange={manejarCambioArchivo} 
              disabled={cargando}
            />
          </label>
        </div>
        <div className="popup-buttons">
          <button onClick={onClose} disabled={cargando}>Cancelar</button>
          <button onClick={manejarCarga} disabled={cargando}>
            {cargando ? "Subiendo..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCarga;
