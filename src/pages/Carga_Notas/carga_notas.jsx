//Componente para evaluar el cumplimiento en la carga de notas de un docente.
//Permite seleccionar las fechas y evaluar si las notas fueron cargadas a tiempo o no.
import { FaSave, FaBroom, FaEdit } from "react-icons/fa"; // Importar íconos
import './carga_de_notas.css';
import { useState } from "react";
import {guardarNotas} from '../../services/carga_notasService';


const  CargaDeNotas = () => {
//Estado que contiene las respuestas de los formularios
const [formData, setFormData] = useState({
  fecha_limite: "",
  fecha_carga: "",
  a_tiempo: "",
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
    fecha_limite: "",
    fecha_carga: "",
    a_tiempo: "",
  });
};


//Envía los datos al backend usando la función fetch guardarNotas.
const handleSubmit = async () => {
  try{
    const result = await guardarNotas(formData);
    alert(result.mensaje); //Muestra el mensaje del backend
  } catch (error) {
    alert ("No se pudieron guardar los datos.");
  }
};

  return (
    <div className="carga-container">
      <div className="carga-header">
        <span className="icon">📊</span>
        <h2>Carga de Notas</h2>
      </div>

    {/* Tarjetas que contienen los formularios de carga de notas. */}
      <div className="cardd">
          <h4>Evalúe el cumplimiento en la carga de notas del docente MARGARITO PERÉZ (101010101)</h4>
      </div>

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

    {/* Botones de acción. */}
      <div className='botones-acciones'>
        <button type="button" className="btn-clear" title="Limpiar"><FaBroom />Limpiar</button>
        <button type="submit" className="btn-save" title="Guardar"><FaSave />Guardar</button>
      </div>
    </div>
  );
}

export default CargaDeNotas;
