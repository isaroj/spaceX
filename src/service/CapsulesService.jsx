import Axios from "axios";

const url = "https://api.spacexdata.com/v4/capsules/";

export const capsulesService = (query) => {
  const queryUrl = url+`?query=${query}`
  return Axios.get(queryUrl);
};
