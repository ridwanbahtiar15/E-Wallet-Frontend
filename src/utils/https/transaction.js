import axios from "axios";

const url = import.meta.env.VITE_BACKEND_HOST + "/transaction";
// const token = localStorage.getItem("token");
export const transaction = (token, query) => {
  const authAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return authAxios.get(`?${query}`);
};

export const deleteTransaction = (id, type, token) => {
  const authAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return authAxios.delete(`/${id}?transaction_type=${type}`);
};

export const transactionChart = (
  token,
  userId,
  startDate,
  endDate,
  summary
) => {
  const authAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return authAxios.get(
    `/chart/${userId}?start=${startDate}&end=${endDate}&summary=${summary}`
  );
};
