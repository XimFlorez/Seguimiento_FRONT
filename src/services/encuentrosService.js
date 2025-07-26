//Sube los encuentros por docente
import API_URL from "../config";


export const obtenerEncuentros = async (documento) => {
    const response = await fetch(`${API_URL}/encuentros`);
    const encuentros = await response.json();
    return encuentros.filter(a => a.documento_docente === documento);
};

export const guardarEncuentros = async (encuentros) => {
  const response = await fetch(`${API_URL}/crear-encuentro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(encuentros),
  });

  if (!response.ok) {
    throw new Error("Error al guardar el encuentro");
  }
  return await response.json();
};
