import React from 'react';
import './popup.css';

const PopupCarga = ({ onClose }) => {
  const manejarCarga = () => {
    // alert("Datos cargados correctamente ✅");
    // onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Carga tu archivo</h2>
        <img src="src\assets\img\icons8-excel-48.png" alt="" />
        <div className="input-file">
            <label><input type="file" name="hecho" /></label>
        </div>
        <div className="popup-buttons">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={manejarCarga}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default PopupCarga;