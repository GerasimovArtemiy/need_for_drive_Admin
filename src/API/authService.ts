import axios, { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY, SECRET_KEY } from './keys'

const token = btoa(`10d8c9d:${SECRET_KEY}`)

const responseAPI = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    headers: {
        'X-Api-Factory-Application-Id': API_KEY || '',
        'Access-Control-Allow-Credentials': true,
        Authorization: `Basic ${token}`,
    },
})

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse> {
        return responseAPI.post(apiPath.login, { username, password })
    }

    static async register(username: string, password: string): Promise<AxiosResponse> {
        return responseAPI.post(apiPath.register, { username, password })
    }
}
