 import axios from "axios"

const api = axios.create({
    baseURL : "https://my-json-server.typicode.com/Majoras13/AluraFlix"
    /* baseURL :"http://localhost:5000" */ //local
})

//Categorias
export const getCategories = async ()=>{
    try{
        const response = await api.get("/categories")

        return response.data;
     }
     catch (err){
        console.log("error del get", err);
     }
}

export const addCategory = async (data) =>{
    try {
        const response = await api.post("/categories", data);

        console.log("categoria agregada", response.data)
        
    } catch (err) {
        
    }
}

export const deleteCategory = async (id) => {
    try {
        const response = await api.delete(`/categories/${id}`)
        
        console.log("categoria eliminada", response.data)
        return response.data;
        
    } catch (err) {
        console.log("Error al eliminar", err)
        
    }
}

export const updateCategory = async (id, data) => {
    try {
        const response = await api.put(`/categories/${id}`, data);
        
        console.log("categoria actualizada", response.data)
        return response.data
    } catch (err) {
        console.log("Error al actualizar", err)
        
    }
}

//videos

export const addVideo =  async (data) => {
    try {
        const response = await api.post("/videos", data);

        console.log("se estan enviando estos datos" , response.data)

        return response.data;
    }
    catch (err){
        console.log("error del get", err);
    }
}

export const getVideo = async ()=>{
    try {
        const response = await api.get("/videos")

        console.log("get de videos", response.data)
        
        return response.data
    } catch (err) {
        console.log("error al recibir datos", err)
        
    }
}



