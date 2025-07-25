//Componente para evaluar el desarrollo de actividades institucionales de un docente.
//Permite seleccionar opciones y guardar los datos mediante un servicio.
import React, { useState } from 'react';
import { FaSave, FaBroom, FaEdit } from "react-icons/fa"; // Importar íconos
import './actividades.css';
import { guardarActividades } from '../../services/actividadesService';


const ActividadesInstitucionales = () => {
  //Estado que contiene las respuestas del formulario
  const [formData, setFormData] = useState({
    cronograma: "",
    canales: "",
    inicio: "",
    cierre: "",
    programa: "",
  });

  //Actualiza el estado formData cuando se selecciona una opción del formulario.
  // (e) -> Evento del Input.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  //Limpia todas las respuestas del formulario.
  const handleClear = () => {
    setFormData({
      cronograma: "",
      canales: "",
      inicio: "",
      cierre: "",
      programa: "",
    });
  };



  //Envía los datos al backend usando la función fetch guardarActividades.
const handleSubmit = async () => {
  const camposIncompletos = Object.entries(formData).filter(([k, v]) => !v);
  if(camposIncompletos.length > 0){
    alert("Por favor complete todas las preguntas antes de guardar.");
    return;
  }

  try{
    const result = await guardarActividades(formData);
    alert(result.mensaje);  //Muestra el mensaje del backend
  } catch (error) {
    alert("No se pudieron guardar los datos.");
  }
};

 return (
    <div className="contenedor-actividades">
    <h2 className="titulo-principal">🏢 Actividades Institucionales</h2>

    {/* Aqui se renderizan las columnas con sus respectivas tarjetas de evaluación.*/}
      <div className="contenido-columns">
        <div className="columna">

        <div className="card-1">
          <h4>Realice las calificaciones pertinentes al docente MARGARITO PERÉZ (101010101)</h4>
        </div>

        {/* Tarjetas que contienen las preguntas y opciones de respuesta. */}
          <div className="card">
            <h3>📅 Entrega de Cronograma</h3>
            <p className='pregunta'>¿Entregó el cronograma del curso?</p>
            <div className="opciones">
              <label><input type="radio" name="cronograma" value="Sí" onChange={handleChange}/> Sí</label>
              <label><input type="radio" name="cronograma" value="No" onChange={handleChange} /> No</label>
              <label><input type="radio" name="cronograma" value="Tardío" onChange={handleChange}/> Tardío</label>
            </div>
          </div>

          <div className="card">
            <h3>📢 Canales Institucionales</h3>
            <p className='pregunta'>¿Usa los canales institucionales?</p>
            <div className="opciones">
              <label><input type="radio" name="canales" value="Siempre" onChange={handleChange}/> Siempre</label>
              <label><input type="radio" name="canales" value="A veces" onChange={handleChange} /> A veces</label>
              <label><input type="radio" name="canales" value="Nunca" onChange={handleChange}/> Nunca</label>
            </div>
          </div>
        </div>

        <div className="columna">
          <div className="card">  
            <h3>👥 Reunión Inicio de Semestre</h3>
            <p className='pregunta'>¿Asistió a la reunión de inicio del semestre? </p>
            <div className="opciones">
              <label><input type="radio" name="inicio"  value="Asistió" onChange={handleChange}/> Asistió</label>
              <label><input type="radio" name="inicio"  value="No asistió" onChange={handleChange}/> No asistió</label>
            </div>
          </div>

          <div className="card card-pequena">
            <h3>🔚 Reunión Cierre de Semestre</h3>
           <p className='pregunta'>¿Asistió a la reunión de cierre del semestre?</p>
            <div className="opciones">
              <label><input type="radio" name="cierre"  value="Asistió" onChange={handleChange} /> Asistió</label>
              <label><input type="radio" name="cierre"  value="No asistió" onChange={handleChange}/> No asistió</label>
            </div>
          </div>

          <div className="card card-pequena1">
            <h3>📚 Reuniones de Programa</h3>
             <p className='pregunta'>¿Cumplió con las reuniones del programa? </p>
            <div className="opciones">
              <label><input type="radio" name="programa"  value="Siempre" onChange={handleChange}/> Siempre</label>
              <label><input type="radio" name="programa"  value="A veces" onChange={handleChange}/> A veces</label>
              <label><input type="radio" name="programa"  value="Nunca" onChange={handleChange}/> Nunca</label>
            </div>
          </div>
        </div>
      </div>
    {/* Botones de acción. */}
      <div className="form-buttonss">
        <button type="button" className="btn-clear" title="Limpiar" onClick={handleClear}><FaBroom />Limpiar</button>
        <button type="submit" className="btn-save" title="Guardar" onClick={handleSubmit}><FaSave />Guardar</button>
      </div>
    </div>
  );
};

export default ActividadesInstitucionales;