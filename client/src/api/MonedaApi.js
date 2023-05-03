import axios from 'axios';
const MonedaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/crea/api/v1/crea/",

})


export const getMonedaApi = () => {
    return MonedaApi.get("/")
}
export const getMonedaApixid = (id) => {
    return MonedaApi.get(`/${id}/`)
}


export const postMonedaApi = (crea) => {
    return MonedaApi.post("/", crea)
}


export const deleteMonedaApi = (id) => {
    return MonedaApi.delete(`/${id}`)
}

export const updateMonedaApi = (id, crea) => {
    return MonedaApi.put(`/${id}/`, crea)
}


