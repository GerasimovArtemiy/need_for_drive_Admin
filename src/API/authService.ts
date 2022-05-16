import { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { apiClient } from './apiClient'

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse> {
        return apiClient().post(apiPath.login, { username, password })
    }

    static async register(username: string, password: string): Promise<AxiosResponse> {
        return apiClient().post(apiPath.register, { username, password })
    }
}
