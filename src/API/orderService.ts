import axios, { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'

const bearerToken = localStorage.getItem('accessToken')
const responseAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Api-Factory-Application-Id': API_KEY || '',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
    },
})
interface IParams {
    limit: number
    page: number
}
export default class OrderService {
    static async getOrders(params: IParams): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.order, { params })
    }

    static async getOrderStatuses(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.orderStatus)
    }
}
