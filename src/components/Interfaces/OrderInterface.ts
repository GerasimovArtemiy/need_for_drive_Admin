import { IRate } from './RateInterface'
import { ICar } from './CarInterface'

export interface IOrderStatus {
    name: string
    id: string
}
export interface IOrder {
    orderStatusId: IOrderStatus
    cityId: {
        name: string
        id: string
    }
    pointId: {
        address: string
        id: string
        name: string
    }
    carId: ICar
    color: string
    dateFrom: number
    dateTo: number
    rateId: IRate
    price: number
    isFullTank: boolean
    isNeedChildChair: boolean
    isRightWheel: boolean
    id: string
}

export interface IOrdersResponse {
    data: IOrder[]
    count: number
    fields?: any
}
