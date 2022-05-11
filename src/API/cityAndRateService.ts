import { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { INewRateRequest, INewRateType } from '../components/Interfaces/RateInterface'
import { apiClient } from './apiClient'

export default class CityAndRateService {
    static async getEntities(itemPath: string): Promise<AxiosResponse> {
        return apiClient().get(itemPath)
    }
    static async deleteEntity(itemPath: string, entityId: string): Promise<AxiosResponse> {
        return apiClient().delete(`${itemPath}/${entityId}`)
    }

    static async postCity(city: string): Promise<AxiosResponse> {
        return apiClient().post(apiPath.cities, { name: city })
    }

    static async postRate(rate: INewRateRequest): Promise<AxiosResponse> {
        return apiClient().post(apiPath.rate, { ...rate })
    }

    static async getRateTypeByName(name: string): Promise<AxiosResponse> {
        return apiClient().get(`${apiPath.rateType}?name=${name}`)
    }
    static async postRateType(rateType: INewRateType): Promise<AxiosResponse> {
        return apiClient().post(apiPath.rateType, { ...rateType })
    }

    static async getPointsById(cityId: string | undefined): Promise<AxiosResponse> {
        return apiClient().get(`${apiPath.point}?cityId=${cityId}`)
    }
}
