import axios, { AxiosResponse } from 'axios'
import { IOrderParamsInterface } from '../components/Interfaces/ParamsInterface'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'

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

export default class CarService {
    static async getCategories(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.categories)
    }

    static async getCars(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.cars)
    }

    static async getCarsByParams(params: IOrderParamsInterface): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.cars, { params })
    }

    static async deleteCar(carId: string) {
        return responseAPI.delete(`${apiPath.cars}/${carId}`)
    }
}
