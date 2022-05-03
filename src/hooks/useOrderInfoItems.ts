import { useCallback } from 'react'
import { dateConverter } from '../utils/DateConverter'
import { IOrder } from '../components/Interfaces/OrderInterface'

export interface IOrderInfoItems {
    id: number
    title: string
    subtitle: string | number
}

export const useOrderInfoItems = () => {
    const setOrderInfoItems = useCallback((order: IOrder): IOrderInfoItems[] => {
        const orderItems = [
            {
                id: 0,
                title: 'Город',
                subtitle: order.cityId?.name ? order.cityId?.name : 'Не известно',
            },
            {
                id: 1,
                title: 'Адрес',
                subtitle: order.pointId?.address ? order.pointId?.address : 'Не известно',
            },
            {
                id: 2,
                title: 'Модель',
                subtitle: order.carId?.name ? order.carId?.name : 'Не известно',
            },
            {
                id: 3,
                title: 'Статус',
                subtitle: order.orderStatusId?.name ? order.orderStatusId?.name : 'Не известно',
            },
            {
                id: 4,
                title: 'Цвет',
                subtitle: order.color ? order.color : 'Не известно',
            },
            {
                id: 5,
                title: 'Цена',
                subtitle: order.price ? order.price : 'Не известно',
            },
            {
                id: 6,
                title: 'Дата от',
                subtitle: order.dateFrom ? dateConverter(order.dateFrom) : 'Не известно',
            },
            {
                id: 7,
                title: 'Дата до',
                subtitle: order.dateTo ? dateConverter(order.dateTo) : 'Не известно',
            },
            {
                id: 8,
                title: 'Полный бак',
                subtitle: order.isFullTank ? 'Да' : 'Нет',
            },
            {
                id: 9,
                title: 'Детское кресло',
                subtitle: order.isNeedChildChair ? 'Да' : 'Нет',
            },
            {
                id: 10,
                title: 'Правый руль',
                subtitle: order.isRightWheel ? 'Да' : 'Нет',
            },
        ]
        return orderItems
    }, [])

    return setOrderInfoItems
}
