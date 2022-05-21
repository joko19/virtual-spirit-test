import instance from "./instance.js"

const index = () => instance.get("/posts");

const api = {
    index
}

export default api