import { ISelectOption } from '../components/Interfaces/SelectOptionInterface'
import { IPoint } from '../components/Interfaces/CityInterface'
import { useAppSelector } from './redux-hooks'

export interface IOrderFormValues {
    city: ISelectOption
    point: IPoint
    car: ISelectOption
    color: string[]
    rate: ISelectOption
    orderStatus: ISelectOption
    tank: string[]
    childChair: string[]
    rightWheel: string[]
}
export type IOrderInputsNames = keyof IOrderFormValues
export interface IOrderInput {
    name: IOrderInputsNames
    placeholder: string
    label: string
    id: string
    defaultValue?: any
    items: any
    onChange?: (option: any) => void
}

export const useOrderFormInputs = () => {
    const orderById = useAppSelector((state) => state.order.orderById.selectOrder)
    const cities = useAppSelector((state) => state.city.cities.items.data)
    const rates = useAppSelector((state) => state.rate.allRates)
    const cars = useAppSelector((state) => state.cars.allCars.data)
    const orderStatuses = useAppSelector((state) => state.order.orderStatuses.data)
    const pointsByCityId = useAppSelector((state) => state.city.pointsById.data)
    const boleanItem = [
        { name: 'Да', id: '1' },
        { name: 'Нет', id: '2' },
    ]
    const pointItems = pointsByCityId.map((point) => ({
        name: point.address,
        id: point.id,
    }))

    const setOrderInputValues = (): IOrderInput[] => {
        const colorItem =
            orderById &&
            orderById.carId?.colors.map((color) => ({
                name: color,
                id: orderById.carId.id,
            }))
        const inputValues: IOrderInput[] = [
            {
                name: 'city',
                placeholder: 'Выберите город',
                label: 'Город',
                id: 'city',
                items: cities,
            },
            {
                name: 'point',
                placeholder: 'Выберите пункт',
                label: 'Пункт',
                id: 'point',
                items: pointItems,
            },
            {
                name: 'car',
                placeholder: 'Выберите модель',
                label: 'Модель',
                id: 'car',
                items: cars,
            },
            {
                name: 'orderStatus',
                placeholder: 'Определите статус',
                label: 'Статус',
                id: 'orderStatus',
                items: orderStatuses,
                defaultValue: orderById.orderStatusId && {
                    id: orderById.orderStatusId?.id,
                    value: orderById.orderStatusId?.name,
                    label: orderById.orderStatusId?.name,
                },
            },
            {
                name: 'color',
                placeholder: 'Выберите цвет',
                label: 'Цвет',
                id: 'color',
                items: orderById && colorItem,
            },
            {
                name: 'tank',
                placeholder: 'Полный бак?',
                label: 'Полный бак',
                id: 'tank',
                items: boleanItem,
                defaultValue: orderById && {
                    id: orderById.orderStatusId?.id,
                    value: orderById.isFullTank ? boleanItem[0].name : boleanItem[1].name,
                    label: orderById.isFullTank ? boleanItem[0].name : boleanItem[1].name,
                },
            },
            {
                name: 'childChair',
                placeholder: 'Детское кресло?',
                label: 'Детское кресло',
                id: 'childChair',
                items: boleanItem,
                defaultValue: orderById && {
                    id: orderById.orderStatusId?.id,
                    value: orderById.isNeedChildChair ? boleanItem[0].name : boleanItem[1].name,
                    label: orderById.isNeedChildChair ? boleanItem[0].name : boleanItem[1].name,
                },
            },
            {
                name: 'rightWheel',
                placeholder: 'Правый руль?',
                label: 'Правый руль',
                id: 'description',
                items: boleanItem,
                defaultValue: orderById && {
                    id: orderById.orderStatusId?.id,
                    value: orderById.isRightWheel ? boleanItem[0].name : boleanItem[1].name,
                    label: orderById.isRightWheel ? boleanItem[0].name : boleanItem[1].name,
                },
            },
        ]
        return inputValues
    }

    return setOrderInputValues
}
