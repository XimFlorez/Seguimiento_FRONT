import { FaSave, FaBroom, FaEdit,FaFilePdf } from "react-icons/fa"; // Importar íconos
import './Observaciones.css';

export default function Observaciones() {
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
        <button type="submit" className="btn-save" title="Guardar"><FaSave /></button>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom /></button>
        <button type="button" className="btn-editar" title="Editar"><FaEdit /></button>
      </div>
      </div>
  );
}
