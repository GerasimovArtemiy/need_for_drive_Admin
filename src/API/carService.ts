import axios, { AxiosResponse } from 'axios'
import { IOrderParamsInterface } from '../components/Interfaces/ParamsInterface'
import { INewCar } from '../components/Interfaces/CarInterface'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'

interface IPutCar {
    carId: string
    car: INewCar
}

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

    static async deleteCar(carId: string): Promise<AxiosResponse> {
        return responseAPI.delete(`${apiPath.cars}/${carId}`)
    }

    static async getCarById(carId: string | undefined): Promise<AxiosResponse> {
        return responseAPI.get(`${apiPath.cars}/${carId}`)
    }

    static async postCar(newCar: INewCar) {
        return responseAPI.post(apiPath.cars, { ...newCar })
    }

    static async putCar(newCar: IPutCar): Promise<AxiosResponse> {
        return responseAPI.put(`${apiPath.cars}/${newCar.carId}`, {
            ...newCar.car,
        })
    }
}
