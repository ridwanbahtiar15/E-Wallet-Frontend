import axios from "axios";

const url = import.meta.env.VITE_BACKEND_HOST + "/transaction";

export const transaction = (userId) => {
  return axios.get(url + `/${userId}`);
};
