import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_HOST

export const getProfile = (jwt) => {
    const url = baseUrl + "/user/profile"
    return axios.get(url, {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    })
}

export const updateProfile = (body, jwt) => {
    const url = baseUrl + "/user"
    return axios.patch(url, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
            'Content-Type': 'multipart/form-data',
        }
    })
}