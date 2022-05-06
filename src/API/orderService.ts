import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { apiPath } from './apiPath'
import { BASE_URL, API_KEY } from './keys'
import { INewOrder } from '../components/Interfaces/OrderInterface'
import { IOrderParamsInterface } from '../components/Interfaces/ParamsInterface'

const responseAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Api-Factory-Application-Id': API_KEY || '',
        'Content-Type': 'application/json',
    },
})
responseAPI.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const bearerToken = localStorage.getItem('accessToken')!
        if (bearerToken) {
            config.headers!['Authorization'] = `Bearer ${bearerToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default class OrderService {
    static async getOrders(params: IOrderParamsInterface): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.order, { params })
    }

    static async getOrderStatuses(): Promise<AxiosResponse> {
        return responseAPI.get(apiPath.orderStatus)
    }

    static async getOrderById(orderId: string | undefined): Promise<AxiosResponse> {
        return responseAPI.get(`${apiPath.order}/${orderId}`)
    }

    static async putOrder(newOrder: {
        orderId: string | undefined
        order: INewOrder
    }): Promise<AxiosResponse> {
        return responseAPI.put(`${apiPath.order}/${newOrder.orderId}`, {
            ...newOrder.order,
        })
    }

    static async deleteOrder(orderId: string | undefined): Promise<AxiosResponse> {
        return responseAPI.delete(`${apiPath.order}/${orderId}`)
    }
}
