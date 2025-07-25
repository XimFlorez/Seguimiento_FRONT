//Guarda las observaciones respectivas al docente.
import API_URL from "../config";

export const guardarObservaciones = async (formData) => {
    try{
        const response = await fetch(`${API_URL}/observaciones`,{
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
    } catch (error) {
        console.error("Error al guardar las observaciones: ", error);
        throw error;
    }
};