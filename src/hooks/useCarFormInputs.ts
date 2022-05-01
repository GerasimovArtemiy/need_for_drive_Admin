import { ICar } from '../components/Interfaces/CarInterface'
import { ISelectOption } from '../components/Interfaces/SelectOptionInterface'
import { useCallback } from 'react'

export interface ICarFormValues {
    name: string
    number: string
    tank: string
    priceMin: string
    priceMax: string
    description: string
    category: ISelectOption
    image: FileList
}
export type CarInputsValues = keyof ICarFormValues
export interface ICarInput {
    name: CarInputsValues
    placeholder: string
    label: string
    id: string
    type: string
    defaultValue: string
}
export const useCarFormInputs = () => {
    const setCarInputValues = useCallback((car: ICar): ICarInput[] => {
        const inputValues: ICarInput[] = [
            {
                name: 'name',
                placeholder: 'Модель',
                label: 'Модель',
                id: 'name',
                type: 'text',
                defaultValue: car ? car.name : '',
            },
            {
                name: 'number',
                placeholder: 'Номер',
                label: 'Номер',
                id: 'number',
                type: 'text',
                defaultValue: car ? car.number : '',
            },
            {
                name: 'priceMin',
                placeholder: 'Цена от',
                label: 'Цена от',
                id: 'priceMin',
                type: 'text',
                defaultValue: car.priceMin ? String(car.priceMin) : '',
            },
            {
                name: 'priceMax',
                placeholder: 'Цена до',
                label: 'Цена до',
                id: 'priceMax',
                type: 'text',
                defaultValue: car.priceMax ? String(car.priceMax) : '',
            },
            {
                name: 'tank',
                placeholder: 'Топливо',
                label: 'Топливо',
                id: 'tank',
                type: 'text',
                defaultValue: car.tank ? String(car.tank) : '',
            },
            {
                name: 'description',
                placeholder: 'Описание',
                label: 'Описание',
                id: 'description',
                type: 'textarea',
                defaultValue: car ? car.description : '',
            },
        ]
        return inputValues
    }, [])

    return setCarInputValues
}
