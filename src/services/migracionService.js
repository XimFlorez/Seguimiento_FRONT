//Carga la migración del excel al sistema
import API_URL from "../config";

export const migrarArchivo = async (archivo) => {
  const formData = new FormData();
  formData.append("file", archivo);

  const response = await fetch(`${API_URL}/migrar`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Error al subir el archivo");
  }

  return await response.json();
};