import axios from 'axios';
const blogApi=axios.create({
    baseURL: "http://127.0.0.1:8000/blog/api/v1/blogs/"
})
export const getblogsApi = () => {
    return blogApi.get("/")
}
export const getblogsApixid = (id) => {
    return blogApi.get(`/${id}/`)
}


export const postblogsApi = (blog) => {
    return blogApi.post("/",blog)
}


export const deleteblogsApi = (id) => {
    return blogApi.delete(`/${id}`)
}

export const updateblogsApi = (id,blog) => {
    return blogApi.put(`/${id}/`,blog)
}