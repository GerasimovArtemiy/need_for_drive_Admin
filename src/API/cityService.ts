import axios, { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'

const responseAPI = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    headers: {
        'X-Api-Factory-Application-Id': API_KEY || '',
        'Access-Control-Allow-Credentials': true,
    },
})

export default class CityService {
    static async getCity(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.cities)
    }
}
