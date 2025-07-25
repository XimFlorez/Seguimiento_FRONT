import React, { useState } from 'react';
import './informacion.css';
import Layout from "../../components/Layout/layout";
import { FaSave, FaBroom, FaSearch} from "react-icons/fa"; // Importar íconos
import { buscarDocentePorDocumento, obtenerAsignaturasPorDocumento, guardarEvaluacion } from '../../services/docenteService';
import Swal from 'sweetalert2';


const EvaluacionForm = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [asignaturas, setAsignaturas] = useState([]);
  const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState("");

  const [formulario, setFormulario] = useState({
    ciclo: "",
    semestre:"",
    diaEncuentro:"",
    fechaEvaluacion:""
  });


  const handleBuscar = async () => {
    try{
      console.log("Buscando con documento:", documento);
      const docente = await buscarDocentePorDocumento(documento);
      console.log("Respuesta del docente:", docente);
      if(docente){
        setNombre(docente.nombre);
        setApellido(docente.apellido);
      }

      const asignaturas = await obtenerAsignaturasPorDocumento(documento);
      console.log("Asignaturas filtradas:", asignaturas);
      setAsignaturas(asignaturas);    
      } catch (err) {
      console.error("Error al buscar docente/asignaturas: ", err);
      alert("Docente no encontrado o sin asignaturas.")
    }
  };


const handleGuardar = async () => {
  const resultadoConfirmacion = await Swal.fire({
    title: '¿Seguro deseas guardar esta evaluación?',
    // text: '¿Deseas guardar esta evaluación?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#1e2a57',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, guardar',
    cancelButtonText: 'Cancelar'
  });

  if(!resultadoConfirmacion.isConfirmed){
    return;
  }

  const evaluacion = {
    documento, 
    nombre, 
    apellido,
    asignatura: asignaturaSeleccionada,
    ...formulario,
  };

  console.log("Datos a guardar: ", evaluacion);

  try {
    const resultado = await guardarEvaluacion(evaluacion);

    await Swal.fire({
      title: '¡Guardado!',
      text: 'La evaluación fue guardada exitosamente.',
      icon: 'success',
      customClass:{
        icon: 'icono-personalizado'
      }

    });


    console.log("Respuesta del servidor:", resultado);
  } catch (error) {
    console.error("Error al guardar la evaluación:", error);

    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un error al guardar la evaluación.Revisa la consola.'
    });
  }
};


  const handleLimpiar = () => {
    setDocumento("");
    setNombre("");
    setApellido("");
    setAsignaturas([]);
    setAsignaturaSeleccionada("");
    setFormulario({
      ciclo: "",
      semestre: "",
      diaEncuentro: "",
      fechaEvaluacion: ""
    });
  };


  return (
   <div className="form-container">
    <h2 className="evaluacion-title"> 📝 Formulario de Seguimiento a Docentes</h2>

<div className='card card2'>
  <div className="documento-contenedor">
    <div className="documento-izquierda">
      <label htmlFor="documento">Documento:</label>
      <input 
        type="text" 
        id="documento" 
        className='documento'
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
        placeholder="Documento del docente" 
      />
    </div>
    <button type="button" className="btn-buscar" onClick={handleBuscar} title="Buscar">
      <FaSearch /> Buscar
    </button>
  </div>
</div>

  <form id="evaluacion-form" className="form-grid">

    {/* CARD 1 */}
    <div className="card1">
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" value={nombre || ""} placeholder="Nombre del docente" readOnly/>
      </div>

      <div className="form-group">
        <label>Apellido</label>
        <input type="text" value={apellido || ""} placeholder="Apellido del docente" readOnly/>
      </div>

      <div className="form-group-full">
        <label>Nombre de la Asignatura</label>
<select
  value={asignaturaSeleccionada}
  onChange={(e) => setAsignaturaSeleccionada(e.target.value)}
>
  <option value="">Seleccionar Asignatura</option>
  {asignaturas.map((a, index) => (
   <option key={index} value={`${a.id} - Grupo ${a.grupo}`}>
      {`${a.nombre} - ${a.grupo}`}
    </option>
  ))}
</select>

         
      </div>
      <div className="form-group">
        <label>Ciclo</label>
        <select value={formulario.ciclo} onChange={(e) => setFormulario ({ ...formulario, ciclo: e.target.value })}>
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
        <select value={formulario.semestre} onChange={(e) => setFormulario({ ...formulario, semestre: e.target.value })}>
          <option value="">Seleccionar</option>
          <option value="2025-1">2025-1</option>
          <option value="2025-2">2025-2</option>
        </select>
      </div>

      <div className="form-group-full">
        <label>Día de Encuentro</label>
        <select value={formulario.diaEncuentro} onChange={(e) => setFormulario({ ...formulario, diaEncuentro: e.target.value })}>
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
        <input type="date"
        value={formulario.fechaEvaluacion}
        onChange={(e) => setFormulario({ ...formulario, fechaEvaluacion: e.target.value })} 
        />
      </div>
    </div>
</form>
  
      <div className='botones-acciones'>
        <button type="button" className="btn-clear" onClick={handleLimpiar} title="Limpiar"><FaBroom />Limpiar</button>
        <button type="submit" className="btn-save" onClick={handleGuardar} title="Guardar"><FaSave />Guardar</button>
    </div>
</div>
)}

export default EvaluacionForm;
