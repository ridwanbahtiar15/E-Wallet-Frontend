import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_HOST + "/auth"

export const enterPin = (body, jwt) => {
    return axios.patch(url, body, {
        headers: {
            'Authorization': 'Bearer' + jwt
        }
    })
}