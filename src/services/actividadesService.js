//Guarda las respuestas del formulario de actividades institucionales.
import API_URL from "../config";

export const guardarActividades = async (formData) => {
    try{
        const response = await fetch(`${API_URL}/actividades`,{
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
        console.error("Error al guardar las actividades: ", error);
        throw error;
    }
};

