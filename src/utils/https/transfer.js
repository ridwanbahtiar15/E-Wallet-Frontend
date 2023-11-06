import axios from "axios";

export const getUser = (url, body, jwt) => {
    return axios.get(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    });
}