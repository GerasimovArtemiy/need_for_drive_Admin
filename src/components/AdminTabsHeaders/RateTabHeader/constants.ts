import { ITitle } from '../../Interfaces/TitlesItemsInterface'
interface IInputs {
    id: number
    name: string
    placeholder: string
}
export const titlesItems: ITitle[] = [
    {
        id: 0,
        title: 'Тариф',
    },
    {
        id: 1,
        title: 'Время',
    },
    {
        id: 2,
        title: 'Цена, ₽',
    },
]

export const inputs: IInputs[] = [
    {
        id: 0,
        name: 'name',
        placeholder: 'Название тарифа...',
    },
    {
        id: 1,
        name: 'unit',
        placeholder: 'Время действия...',
    },
    {
        id: 2,
        name: 'price',
        placeholder: 'Цена тарифа...',
    },
]
