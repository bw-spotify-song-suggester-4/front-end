import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: // Need to place endpoint here
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
