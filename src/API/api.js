import { API_AXIOS } from "./axios";

export default {
  search: (district) => API_AXIOS.post(`/search`, { district: district }),
  dong: (dong) => API_AXIOS.post(`/search`, { dong: dong }),
};
