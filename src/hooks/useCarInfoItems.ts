import { useCallback } from 'react'
import { ICar } from '../components/Interfaces/CarInterface'

export interface ICarInfoItems {
    id: number
    title: string
    subtitle: string
}

export const useCarInfoItems = () => {
    const setCarInfoItems = useCallback((car: ICar): ICarInfoItems[] => {
        const items = [
            {
                id: 0,
                title: 'Модель',
                subtitle: car ? car.name : '',
            },
            {
                id: 1,
                title: 'Номер',
                subtitle: car ? car.number : '',
            },
            {
                id: 2,
                title: 'Категория',
                subtitle: car ? car.categoryId?.name : '',
            },
            {
                id: 3,
                title: 'Топливо',
                subtitle: car.tank ? String(car.tank) : '',
            },
            {
                id: 4,
                title: 'Цена от',
                subtitle: car.priceMin ? String(car.priceMin) : '',
            },
            {
                id: 5,
                title: 'Цена до',
                subtitle: car.priceMax ? String(car.priceMax) : '',
            },
            {
                id: 6,
                title: 'Описание',
                subtitle: car ? car.description : '',
            },
        ]
        return items
    }, [])

    return setCarInfoItems
}
