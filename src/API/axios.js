import axios from "axios";

export const API_URL = "http://192.168.0.179:8080/odds/";
export const API_AXIOS = axios.create({ baseURL: API_URL });
