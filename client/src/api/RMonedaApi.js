import axios from 'axios';
const MonedasApi = axios.create({

    baseURL: "http://127.0.0.1:8000/crear/api/v1/crear/"
})

export const getMonedasApi = () => {
    return MonedasApi.get("/")
}
export const getMonedasApixid = (id) => {
    return MonedasApi.get(`/${id}/`)
}


export const postMonedasApi = (crear) => {
    return MonedasApi.post("/", crear)
}


export const deleteMonedasApi = (id) => {
    return MonedasApi.delete(`/${id}`)
}

export const updateMonedasApi = (id, crear) => {
    return MonedasApi.put(`/${id}/`, crear)
}