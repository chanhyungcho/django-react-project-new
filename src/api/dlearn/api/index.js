import axios from 'axios'
const server = `http://localhost:8000`  
export const fashion = req => axios.post(`${server}/admin/dlearn/fashion`, req)