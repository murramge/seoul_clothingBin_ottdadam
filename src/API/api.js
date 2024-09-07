import { API_AXIOS } from "./axios";

export const Search = async (searchValue) => {
  try {
    const data = await API_AXIOS.post(`http://34.64.95.196:8080/search`, {
      fullName: searchValue,
    });
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
