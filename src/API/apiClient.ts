import axios, { AxiosRequestConfig } from 'axios'
import { BASE_URL, API_KEY, SECRET_KEY } from './keys'

const token = btoa(`10d8c9d:${SECRET_KEY}`)

const responseAPI = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    headers: {
        'X-Api-Factory-Application-Id': API_KEY || '',
        'Access-Control-Allow-Credentials': true,
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
    },
})
responseAPI.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const bearerToken = localStorage.getItem('accessToken')!
        if (bearerToken) {
            config.headers!['Authorization'] = `Bearer ${bearerToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export const apiClient = () => {
    return responseAPI
}
