import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/auth";

export const register = (body) => {
  const url = baseUrl + "/register";
  return axios.post(url, body);
};

export const axiosLogin = (body) => {
  const url = baseUrl + "/login";
  return axios.post(url, body);
};

export const axiosLogout = (jwt) => {
  return axios.delete(baseUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};
