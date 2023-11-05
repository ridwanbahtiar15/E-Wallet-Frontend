import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST

export const topUpPayment = (body) => {
    const url = baseUrl + "/transaction/top-up/checkout"
  return axios.post(url, body);
};

export const completeTopUp = (jwt, body) => {
    const url = baseUrl + "/transaction/top-up/notification"
    return axios.post(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}