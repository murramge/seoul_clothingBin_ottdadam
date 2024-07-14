import axios from "axios";

export const API_URL = "/odds/api";
export const API_AXIOS = axios.create({ baseURL: API_URL });
