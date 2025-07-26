import { useState } from "react";
import './seguimiento_funcional.css';
import { VscArrowSmallRight } from "react-icons/vsc";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { FaSave, FaBroom, FaEdit } from "react-icons/fa";

export default function SeguimientoFuncional() {
    const [semanaActiva, setSemanaActiva] = useState(1);
    const [calificacionActiva, setCalificacionActiva] = useState({});
    const [indiceFuncion, setIndiceFuncion] = useState(0);
    const funciones = [

        {
            titulo: "📋 FUNCIÓN ORGANIZATIVA",
            criterios: [
                {
                    id: "org_presentacion",
                    titulo: "Botón Presentación",
                    descripcion: "Contiene presentación de la asignatura, docente, pacto pedagógico, cronograma."
                },
                {
                    id: "org_contenidos",
                    titulo: "Contenidos Actualizados",
                    descripcion: "Unidades, foros, actividades y materiales actualizados según cronograma."
                }
            ]
        },
        {
            titulo: "⚙️ FUNCIÓN TÉCNICA",
            criterios: [
                {
                    id: "ord_ambiente",
                    titulo: "Orden del Ambiente Virtual",
                    descripcion: "Mantiene el orden del ambiente virtual de aprendizaje según lo estipulado para la estructura general del menú de navegación."
                },
                {
                    id: "materiales",
                    titulo: "Nuevos Materiales",
                    descripcion: "Incorpora y/o modifica nuevos materiales al entorno formativo, asegurando que estos sean actualizados y alineados con los objetivos de aprendizaje del curso."
                },
                {
                    id: "enlaces_fechas",
                    titulo: "Enlaces y Fechas",
                    descripcion: "Configura los enlaces para el envío de evidencias de aprendizaje, con una fecha de vencimiento en coherencia con el cronograma de actividades."
                }
            ]
        },
        {
            titulo: "🎯 FUNCIÓN ORIENTADORA",
            criterios: [
                {
                    id: "motivacion",
                    titulo: "Motivación",
                    descripcion: "Realiza acciones de motivación que estimulan al estudiante a continuar con su proceso académico a través de mensajes motivadores, comunicación constante, etc."
                },
                {
                    id: "aviso_inicial",
                    titulo: "Aviso Inicial",
                    descripcion: "Publica aviso inicial del curso incluyendo: el nombre del curso y las unidades, fecha de inicio y finalización e instrucciones sobre qué consultar y los pasos a seguir."
                },
                {
                    id: "organizacion_planeacion",
                    titulo: "Organización y Planeación",
                    descripcion: "Las respuestas a los estudiantes e información publicada evidencia organización y planeación por parte del docente."
                }
            ]
        },
        {
            titulo: "🎓 FUNCIÓN ACADÉMICA",
            criterios: [
                {
                    id: "apertura_foros",
                    titulo: "Apertura de Foros",
                    descripcion: "Realiza apertura de los foros temáticos mediante un planteamiento teórico, explicando brevemente el objetivo e indicando las reglas de participación."
                },
                {
                    id: "respuesta_foros",
                    titulo: "Respuesta en Foros (24h)",
                    descripcion: "Responde de manera eficaz preguntas realizadas por los estudiantes en el foro de dudas e inquietudes en un plazo máximo de 24 horas de días hábiles."
                },
                {
                    id: "retroalimentacion",
                    titulo: "Retroalimentación (72h)",
                    descripcion: "Da retroalimentación de calidad a las evidencias enviadas por los estudiantes en un tiempo máximo de 72 horas de días hábiles."
                },
                {
                    id: "calificaion_sistema",
                    titulo: "Calificaciones al Sistema",
                    descripcion: "Registra y sube correctamente las calificaciones al sistema académico Clic dentro del plazo establecido."
                }
            ]
        }

    ];

    const cambiarSemana = (valorSemana) => {
        setSemanaActiva(valorSemana);
        setIndiceFuncion(0); // Reinicia al primer conjunto de criterios
    };

    const cambiarCalificacion = (semanaId, criterioId, valor) => {
        const key = `${semanaId}_${criterioId}`;
        setCalificacionActiva((prev) => ({
            ...prev,
            [key]: valor,
        }));
    };

    const clasesCriterio = {
        org_contenidos: "criterio-org-contenidos",
        org_presentacion: "criterio-org-presentacion",
        ord_ambiente: "criterio-ord_ambiente",
        calificaion_sistema: "criterio-calificacion_sistema",
        retroalimentacion: "criterio-retroalimentacion",
        respuesta_foros: "criterio-respuesta_foros",
        apertura_foros: "criterio-apertura_foros"

    };

    const getCriterioClase = (criterioId) => clasesCriterio[criterioId] || "";

    const esFuncionAcademica = funciones[indiceFuncion].titulo.includes("FUNCIÓN ACADÉMICA");

    return (
        <div className="seguimiento-container">
            <div className="semana-tabs">
                {[1, 2, 3, 4, 5, 6].map((valorSemana) => (
                    <button
                        key={valorSemana}
                        className={`semana-tab ${semanaActiva === valorSemana ? "activa" : ""}`}
                        onClick={() => cambiarSemana(valorSemana)}
                    >
                        Semana {valorSemana}
                    </button>
                ))}
            </div>

            {semanaActiva && (
                <div className="semana-content">
                    <div className="funciones-grid">
                        <div className="funcion-section">
                            <div className="card-seguimiento">
                                <h4>Evalúe el cumplimiento en los encuentros sincrónicos del docente MARGARITO PERÉZ (101010101)</h4>
                            </div>

                            <h4 className="funcion-titulo">{funciones[indiceFuncion].titulo}</h4>

                            <div className={`criterios-grid ${esFuncionAcademica ? "grid-dos-columnas" : ""}`}>
                                {funciones[indiceFuncion].criterios.map((criterio) => {
                                    const key = `semana${semanaActiva}_${criterio.id}`;
                                    return (
                                        <div key={criterio.id} className={`criterio-card ${getCriterioClase(criterio.id)}`}>
                                            <h5>{criterio.titulo}</h5>
                                            <p className="criterio-descripcion">{criterio.descripcion}</p>

                                            <div className="rating-row">
                                                {[1, 2, 3, 4, 5].map((valor) => (
                                                    <div key={valor} className="rating-item">
                                                        <div
                                                            className={`rating-number ${calificacionActiva[key] === valor ? "activa" : ""}`}
                                                            onClick={() => cambiarCalificacion(`semana${semanaActiva}`, criterio.id, valor)}
                                                        >
                                                            {valor}
                                                        </div>
                                                        <span className="rating-label">
                                                            {["Deficiente", "Regular", "Bueno", "Muy Bueno", "Excelente"][valor - 1]}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                        <div className="botones-acciones-seguimiento">
                            <button type="button" className="btn-clear" title="Limpiar">
                                <FaBroom /> Limpiar
                            </button>

                            {indiceFuncion === funciones.length - 1 && (
                                <button type="button" className="btn-save" title="Guardar">
                                    <FaSave /> Guardar
                                </button>
                            )}
                        </div>
                    </div>
                </div >
            )
            }
            {indiceFuncion > 0 && (
                <a className="anterior" onClick={(e) => { e.preventDefault(); setIndiceFuncion((prev) => (prev > 0 ? prev - 1 : prev)); }}>
                    <i><VscArrowSmallLeft /></i>
                </a>
            )}
            {indiceFuncion < 3 && (
                <a className="siguiente" onClick={(e) => { e.preventDefault(); setIndiceFuncion((prev) => prev < funciones.length - 1 ? prev + 1 : prev); }}>
                    <i><VscArrowSmallRight /></i>
                </a>
            )}

        </div >
    );
}
