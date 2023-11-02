import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/auth";

export const register = (body) => {
  const url = baseUrl + "/register";
  return axios.post(url, body);
};
