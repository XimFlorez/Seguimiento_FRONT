import React from 'react';
import './informacion.css';
import Layout from "../../components/Layout/layout";
import { FaSave, FaBroom, FaEdit } from "react-icons/fa"; // Importar íconos


const EvaluacionForm = () => {
  const handleReset = () => {
    document.getElementById("evaluacion-form").reset();
  };

  return (
   <div className="form-container">
    <h2 className="evaluacion-title"> 📝 Formulario de Seguimiento a Docentes</h2>

  <form id="evaluacion-form" className="form-grid">
    {/* CARD 1 */}
    <div className="card1">
      <div className="form-group">
        <label>Documento</label>
        <input type="text" placeholder="Documento del docente" />
      </div>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" placeholder="Nombre del docente" />
      </div>
      <div className="form-group">
        <label>Apellido</label>
        <input type="text" placeholder="Apellido del docente" />
      </div>
      <div className="form-group-full">
        <label>Nombre de la Asignatura</label>
        <input type="text" placeholder="Nombre de la asignatura" />
      </div>
      <div className="form-group">
        <label>Ciclo</label>
        <select>
          <option value="">Seleccionar ciclo</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
        </select>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="card1">
      <div className="form-group">
        <label>Semestre</label>
        <select>
          <option value="">Seleccionar semestre</option>
          <option value="2025-1">2025-1</option>
          <option value="2025-2">2025-2</option>
        </select>
      </div>
      <div className="form-group-full">
        <label>Día de Encuentro Sincrónico</label>
        <select>
          <option value="">Seleccionar día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
        </select>
      </div>
      <div className="form-group-full">
        <label>Fecha de Evaluación</label>
        <input type="date" />
      </div>
    </div>

    <div className="form-buttonss">
        <button type="submit" className="btn-save" title="Guardar"><FaSave /></button>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom /></button>
        <button type="button" className="btn-editar" title="Editar"><FaEdit /></button>
    </div>
  </form>
</div>
)}

export default EvaluacionForm;
