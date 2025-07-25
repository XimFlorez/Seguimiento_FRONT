//Guarda las respuestas del formulario de carga de notas.
import API_URL from "../config";

export const guardarNotas = async (formData) => {
    try{
        const response = await fetch(`${API_URL}/carga_notas`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok){
            throw new Error("Error procesando la solicitud.");
        }

        const data = await response.json();
        return data;
    } catch (error){
        console.error("Error al guardar las notas: ", error);
        throw error;
    }
};