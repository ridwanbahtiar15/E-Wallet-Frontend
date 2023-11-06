import axios from "axios";

export const confirmPin = (body, jwt) => {
    const url = import.meta.env.VITE_BACKEND_HOST + "/user"
    return axios.post(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}

export const createTransfer = (body, jwt) => {
    const url = import.meta.env.VITE_BACKEND_HOST + "/transaction/transfer";
    return axios.post(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}

