//Componente para realizar observaciones acerca del desempeño del docente.
//Permite realizar observaciones y guardarlas mediante un servicio.
import { FaSave, FaBroom, FaEdit,FaFilePdf } from "react-icons/fa"; // Importar íconos
import './Observaciones.css';
import {guardarObservaciones} from '../../services/observacionesService'
import { useState } from "react";

const Observaciones = () => {
  //Estado que contiene las observaciones
  const [formData, setFormData] = useState({
    coordinacion: "",
    revisor: "",
  });


  //Actualiza el estado formData cuando se realiza una observación.
  // (e) -> Evento del Input.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  //Limpia todas las observaciones.
  const handleClear = () => {
    setFormData({
      coordinacion: "",
      revisor: "",
    });
  };


  //Envía las observaciones al backend usando la función fetch guardarObservaciones.
  const handleSubmit = async () => {
    try{
      const result = await guardarObservaciones(formData);
      alert(result.mensaje); //Muestra el mensaje del backend
    } catch (error) {
      alert("No se pudieron guardar los datos.");
    }
  };

  return (
    <div className="observaciones-container">
      <div className="observaciones-header">
        <div className="header-title">
          <span className="emoji">📝</span>
          <h3>Observaciones</h3>
        </div>
        <button className="btn-export" title="Exportar a PDF">
          <FaFilePdf />
        </button>
      </div>
        <div className="cardd">
          <h4>Realice las observaciones pertinentes al docente MARGARITO PERÉZ (101010101)</h4>
        </div>

      <div className="observaciones-body">
        <div className="observacion-box">
          <h4>Observaciones de la Coordinación</h4>
          <textarea
            placeholder="Observaciones de la coordinación del programa académico..."
          ></textarea>
        </div>

        <div className="observacion-box">
          <h4>Observaciones del Revisor</h4>
          <textarea
            placeholder="Observaciones del revisor o supervisor del docente..."
          ></textarea>
        </div>
      </div>

      <div className='botones-acciones'>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom />Limpiar</button>
        <button type="submit" className="btn-save" title="Guardar"><FaSave />Guardar</button>
      </div>
      </div>
  );
}

export default Observaciones;