import { IRate } from './RateInterface'
import { ICar } from './CarInterface'

export interface IOrder {
    orderStatusId: {
        name: string
        id: string
    }
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
