import { API_AXIOS } from "./axios";

export const Search = async (searchValue) => {
  try {
    const data = await API_AXIOS.post(`/search`, { fullName: searchValue });
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
