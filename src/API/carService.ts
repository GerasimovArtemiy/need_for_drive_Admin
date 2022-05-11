import { AxiosResponse } from 'axios'
import { IOrderParamsInterface } from '../components/Interfaces/ParamsInterface'
import { INewCar } from '../components/Interfaces/CarInterface'
import { apiPath } from './apiPath'
import { apiClient } from './apiClient'

interface IPutCar {
    carId: string
    car: INewCar
}

export default class CarService {
    static async getCategories(): Promise<AxiosResponse> {
        return apiClient().get(apiPath.categories)
    }

    static async getCars(): Promise<AxiosResponse> {
        return apiClient().get(apiPath.cars)
    }

    static async getCarsByParams(params: IOrderParamsInterface): Promise<AxiosResponse> {
        return apiClient().get(apiPath.cars, { params })
    }

    static async deleteCar(carId: string): Promise<AxiosResponse> {
        return apiClient().delete(`${apiPath.cars}/${carId}`)
    }

    static async getCarById(carId: string | undefined): Promise<AxiosResponse> {
        return apiClient().get(`${apiPath.cars}/${carId}`)
    }

    static async postCar(newCar: INewCar) {
        return apiClient().post(apiPath.cars, { ...newCar })
    }

    static async putCar(newCar: IPutCar): Promise<AxiosResponse> {
        return apiClient().put(`${apiPath.cars}/${newCar.carId}`, {
            ...newCar.car,
        })
    }
}
