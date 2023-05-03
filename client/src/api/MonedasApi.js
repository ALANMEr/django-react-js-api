import axios from 'axios';
const MonedaApi = axios.create({
    baseURL2: "http://127.0.0.1:8000/crear/api/v1/crear/"
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



export const getMonedasApi = () => {
    return MonedaApi.get("/")
}
export const getMonedasApixid = (id) => {
    return MonedaApi.get(`/${id}/`)
}


export const postMonedasApi = (crear) => {
    return MonedaApi.post("/", crear)
}


export const deleteMonedasApi = (id) => {
    return MonedaApi.delete(`/${id}`)
}

export const updateMonedasApi = (id, crear) => {
    return MonedaApi.put(`/${id}/`, crear)
}