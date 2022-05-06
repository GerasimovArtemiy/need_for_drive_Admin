import axios, { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'
import { INewRateRequest, INewRateType } from '../components/Interfaces/RateInterface'

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
    static async getEntities(itemPath: string): Promise<AxiosResponse> {
        return responseAPI.get(itemPath)
    }
    static async deleteEntity(itemPath: string, entityId: string): Promise<AxiosResponse> {
        return responseAPI.delete(`${itemPath}/${entityId}`)
    }

    static async postCity(city: string): Promise<AxiosResponse> {
        return responseAPI.post(apiPath.cities, { name: city })
    }

    static async postRate(rate: INewRateRequest): Promise<AxiosResponse> {
        return responseAPI.post(apiPath.rate, { ...rate })
    }

    static async getRateTypeByName(name: string): Promise<AxiosResponse> {
        return responseAPI.get(`${apiPath.rateType}?name=${name}`)
    }
    static async postRateType(rateType: INewRateType): Promise<AxiosResponse> {
        return responseAPI.post(apiPath.rateType, { ...rateType })
    }

    static async getPointsById(cityId: string | undefined): Promise<AxiosResponse> {
        return responseAPI.get(`${apiPath.point}?cityId=${cityId}`)
    }
}
