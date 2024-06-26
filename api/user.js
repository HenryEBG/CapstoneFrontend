import axios from "axios"

const API="localhost:8500/api"

export const createUser = user => axios.post(`${API}/users`,user);
