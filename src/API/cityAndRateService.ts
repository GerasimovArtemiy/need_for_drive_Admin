import axios, { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'
import { INewRate } from '../components/Interfaces/RateInterface'

const bearerToken = localStorage.getItem('accessToken')
const responseAPI = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    headers: {
        'X-Api-Factory-Application-Id': API_KEY || '',
        'Access-Control-Allow-Credentials': true,
        Authorization: `Bearer ${bearerToken}`,
    },
})

export default class CityAndRateService {
    static async getCity(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.cities)
    }

    static async postCity(city: string): Promise<AxiosResponse> {
        return responseAPI.post(apiPath.cities, { name: city })
    }

    static async deleteCity(cityId: string) {
        return responseAPI.delete(`${apiPath.cities}/${cityId}`)
    }

    static async getRates(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.rate)
    }

    static async postRate(rate: INewRate) {
        return responseAPI.post(apiPath.rate, { ...rate })
    }

    static async deleteRate(rateId: string) {
        return responseAPI.delete(`${apiPath.rate}/${rateId}`)
    }
}
