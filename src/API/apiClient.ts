import axios, { AxiosRequestConfig } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY, SECRET_KEY } from './keys'

const token = btoa(`10d8c9d:${SECRET_KEY}`)

const responseAPI = axios.create({
    baseURL: BASE_URL,
})
responseAPI.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        config.headers = {
            'X-Api-Factory-Application-Id': API_KEY || '',
            Authorization: getAuth(config.url),
        }
        return config
    },
    (error) => Promise.reject(error)
)
const getAuth = (path?: string) => {
    const bearerToken = localStorage.getItem('accessToken')
    return path === apiPath.login ? `Basic ${token}` : `Bearer ${bearerToken}`
}

export const apiClient = () => {
    return responseAPI
}
