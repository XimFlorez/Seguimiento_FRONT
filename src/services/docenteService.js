//Obtiene los datos de los docentes desde la base de datos.
import API_URL from "../config";

export const buscarDocentePorDocumento = async (documento) => {
  const response = await fetch(`${API_URL}/docentes/info/${documento}`);
    if(!response.ok) throw new Error("Docente no encontrado.");
    return await response.json();
};

export const obtenerAsignaturasPorDocumento = async (documento) => {
    const response = await fetch(`${API_URL}/asignaturas`);
    const asignaturas = await response.json();
    return asignaturas.filter(a => a.documento_docente === documento);
};

export const guardarEvaluacion = async (evaluacion) => {
  const response = await fetch(`${API_URL}/evaluaciones`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evaluacion),
  });

  if (!response.ok) {
    throw new Error("Error al guardar la evaluación");
  }
  return await response.json();
};
