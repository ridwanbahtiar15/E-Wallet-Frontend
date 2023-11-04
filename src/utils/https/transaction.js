import axios from "axios";

const url = import.meta.env.VITE_BACKEND_HOST + "/transaction";
const token = localStorage.getItem("token");

export const transaction = (userId) => {
  const authAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return authAxios.get(`/${userId}`);
};

export const deleteTransaction = (id, type) => {
  const authAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return authAxios.delete(`/${id}?transaction_type=${type}`);
};
