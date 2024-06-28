import axios from "axios";

export const API_URL = "http://158.179.194.191:8080/odds/api";
export const API_AXIOS = axios.create({ baseURL: API_URL });
