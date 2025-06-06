import oddLocationData from "../oddlocation.json";

export const Search = async (searchValue) => {
  try {
    const filteredData = oddLocationData.ODD_LOCATION.filter(
      (item) => item.ODD_CITY === searchValue
    );
    return { locList: filteredData };
  } catch (error) {
    console.error(error);
  }
};
