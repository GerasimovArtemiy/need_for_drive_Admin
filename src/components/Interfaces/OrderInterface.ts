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
export interface IOrderResponse {
    status: number
    data: IOrdersItems
}
export interface IOrdersItems {
    data: IOrder[]
    count: number
}
export interface INewOrder {
    orderStatusId: { id: string }
    cityId: { id: string }
    pointId: { id: string }
    carId: { id: string }
    color: string
    isFullTank: boolean
    isNeedChildChair: boolean
    isRightWheel: boolean
}
