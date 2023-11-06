import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST

export const confirmPin = (body, jwt) => {
    const url = baseUrl + "/user"
    return axios.post(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}

export const changePin = (body, jwt) => {
    const url = baseUrl + "/user/pin"
    return axios.patch(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}