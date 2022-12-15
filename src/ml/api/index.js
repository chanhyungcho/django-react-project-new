import axios from 'axios'
const server = `http://localhost:8000`  
export const Useriris = req => axios.post(`${server}/ml/iris`, req)