import axios from "axios";

export const API_URL = "http://192.168.0.180:3030/odds";
export const API_AXIOS = axios.create({ baseURL: API_URL });
