import { FaSave, FaBroom, FaEdit } from "react-icons/fa"; 
import { VscAdd } from "react-icons/vsc";
import './encuentros.css';

export default function Encuentros() {
  return (
    <div className="encuentro-container">
      
      {/* Header */}
      <div className="encuentro-header">
        <span className="icon">🎥</span>
        <h2>Encuentros Sincrónicos</h2>
      </div>

      <div className="cardd">
          <h4>Evalúe el cumplimiento en los encuentros sincrónicos del docente MARGARITO PERÉZ (101010101)</h4>
      </div>

      {/* Contenido */}
      <div className="encuentros-grid">
        {/* Cards */}
        <div className="encuentros-box">
          <h3>Encuentro #</h3>
          <label htmlFor="fecha">Fecha</label>
          <input type="date" id="fecha" />

          <label htmlFor="hora-inicio">Hora inicio</label>
          <input type="time" id="hora-inicio" />

          <label htmlFor="hora-fin">Hora fin</label>
          <input type="time" id="hora-fin" />

          <div className="opciones-encuentros">
            <label><input type="radio" name="hecho" /> Realizado</label>
          </div>

          <div className="opciones-encuentros">
            <label><input type="radio" name="hecho" /> No realizado</label>
          </div>

          <div className='botones-acciones-card'>
          <button type="submit" className="btn-save" title="Guardar"><FaSave />Guardar</button>
          </div>
        </div>

      </div> 

      <div className='botones-acciones'>
        <button type="submit" className="btn-save" title="Agregar"><VscAdd />Agregar encuentro</button>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom />Limpiar</button>
      </div>
    </div>
  );
}
