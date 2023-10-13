import { API_AXIOS } from "./axios";

export default {
  search: (district) => API_AXIOS.post(`/search`, { district: "구로구" }),
};
