import React, { useState } from 'react';
import { FaSave, FaBroom, FaEdit } from "react-icons/fa"; // Importar íconos
import './actividades.css';

const ActividadesInstitucionales = () => {


 return (
    <div className="contenedor-actividades">
    <h2 className="titulo-principal">🏢 Actividades Institucionales</h2>
      
      <div className="contenido-columns">
        <div className="columna">
          <div className="card">
            <h3>📅 Entrega de Cronograma</h3>
            <p>¿Entregó el cronograma del curso?</p>
            <div className="opciones">
              <label><input type="radio" name="cronograma" /> Sí</label>
              <label><input type="radio" name="cronograma" /> No</label>
              <label><input type="radio" name="cronograma" /> Tardío</label>
            </div>
          </div>

          <div className="card">
            <h3>📢 Canales Institucionales</h3>
            <p>¿Usa los canales institucionales?</p>
            <div className="opciones">
              <label><input type="radio" name="canales" /> Siempre</label>
              <label><input type="radio" name="canales" /> A veces</label>
              <label><input type="radio" name="canales" /> Nunca</label>
            </div>
          </div>

          <div className="card">  
            <h3>👥 Reunión Inicio de Semestre</h3>
            <p>¿Asistió a la reunión de inicio del semestre? </p>
            <div className="opciones">
              <label><input type="radio" name="inicio" /> Asistió</label>
              <label><input type="radio" name="inicio" /> No asistió</label>
            </div>
          </div>
        </div>

        <div className="columna">
          <div className="card card-pequena">
            <h3>🔚 Reunión Cierre de Semestre</h3>
           <p>¿Asistió a la reunión de cierre del semestre?</p>
            <div className="opciones">
              <label><input type="radio" name="cierre" /> Asistió</label>
              <label><input type="radio" name="cierre" /> No asistió</label>
            </div>
          </div>

          <div className="card card-pequena">
            <h3>📚 Reuniones de Programa</h3>
             <p>¿Cumplió con las reuniones del programa? </p>
            <div className="opciones">
              <label><input type="radio" name="programa" /> Siempre</label>
              <label><input type="radio" name="programa" /> A veces</label>
              <label><input type="radio" name="programa" /> Nunca</label>
            </div>
          </div>
      <div className="form-buttons">
       <button type="submit" className="btn-save" title="Guardar"><FaSave /></button>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom /></button>
        <button type="button" className="btn-editar" title="Editar"><FaEdit /></button>
      </div>
        </div>
        
      </div>

    </div>
  );
};

export default ActividadesInstitucionales;