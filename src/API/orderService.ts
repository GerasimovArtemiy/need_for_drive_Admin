import { AxiosResponse } from 'axios'
import { apiPath } from './apiPath'
import { INewOrder } from '../components/Interfaces/OrderInterface'
import { IOrderParamsInterface } from '../components/Interfaces/ParamsInterface'
import { apiClient } from './apiClient'

export default class OrderService {
    static async getOrders(params: IOrderParamsInterface): Promise<AxiosResponse> {
        return apiClient().get(apiPath.order, { params })
    }

    static async getOrderStatuses(): Promise<AxiosResponse> {
        return apiClient().get(apiPath.orderStatus)
    }

    static async getOrderById(orderId: string | undefined): Promise<AxiosResponse> {
        return apiClient().get(`${apiPath.order}/${orderId}`)
    }

    static async putOrder(newOrder: {
        orderId: string | undefined
        order: INewOrder
    }): Promise<AxiosResponse> {
        return apiClient().put(`${apiPath.order}/${newOrder.orderId}`, {
            ...newOrder.order,
        })
    }

    static async deleteOrder(orderId: string | undefined): Promise<AxiosResponse> {
        return apiClient().delete(`${apiPath.order}/${orderId}`)
    }
}
