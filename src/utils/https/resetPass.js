import axios from 'axios'

export const resetPassword = (url, body) => {
    return axios.patch(url, body)
}
