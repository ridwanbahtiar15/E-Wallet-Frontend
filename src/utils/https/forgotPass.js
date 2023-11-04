import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_HOST + "/auth/password"

export const forgotPass = (body) => {
    return axios.post(url, body)
}