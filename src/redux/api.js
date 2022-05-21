import axios from 'axios'

export const loadPostsApi = async () => await axios.get("https://jsonplaceholder.typicode.com/posts")
export const viewPostApi = async (id) => await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
export const addPostApi = async (data) => await axios.post(`https://jsonplaceholder.typicode.com/posts/`, data)
export const editPostApi = async (id, data) => await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
export const deletePostApi = async (id) => await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

