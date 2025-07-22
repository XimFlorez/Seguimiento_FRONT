import { FaSave, FaBroom, FaEdit } from "react-icons/fa"; // Importar íconos
import './carga_de_notas.css';

export default function CargaDeNotas() {
  return (
    <div className="carga-container">
      
      {/* Header */}
      <div className="carga-header">
        <span className="icon">📊</span>
        <h2>Carga de Notas</h2>
      </div>

      <div className="cardd">
          <h4>Evalue el cumplimiento en la carga de notas, del docente MARGARITO PERÉZ (101010101)</h4>
      </div>

      {/* Contenido */}
      <div className="notas-grid">
        {/* Sección 70% */}
        <div className="nota-box">
          <h3>Notas 70%</h3>
          <label htmlFor="fecha-limite-70">Fecha límite</label>
          <input type="date" id="fecha-limite-70" />

          <label htmlFor="fecha-carga-70">Fecha de carga</label>
          <input type="date" id="fecha-carga-70" />

          <div className="checkbox-row">
            <input type="checkbox" id="atiempo-70" />
            <label htmlFor="atiempo-70">A tiempo</label>
          </div>
        </div>

        {/* Sección 30% */}
        <div className="nota-box">
          <h3>Notas 30%</h3>
          <label htmlFor="fecha-limite-30">Fecha límite</label>
          <input type="date" id="fecha-limite-30" />

          <label htmlFor="fecha-carga-30">Fecha de carga</label>
          <input type="date" id="fecha-carga-30" />

          <div className="checkbox-row">
            <input type="checkbox" id="atiempo-30" />
            <label htmlFor="atiempo-30">A tiempo</label>
          </div>
        </div>
      </div> 

      <div className='botones-acciones'>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom />Limpiar</button>
        <button type="submit" className="btn-save" title="Guardar"><FaSave />Guardar</button>
      </div>
    </div>
  );
}
