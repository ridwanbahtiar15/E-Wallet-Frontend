import axios from "axios";

export const getUser = (url, jwt) => {
    return axios.get(url, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}

export const createTransfer = (url, body, jwt) => {
    return axios.post(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}