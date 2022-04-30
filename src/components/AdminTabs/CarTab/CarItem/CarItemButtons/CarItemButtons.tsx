import React from 'react'
import Button from '../../../../UI/Buttons/Button'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux-hooks'
import { deleteCar, getCarsByParams } from '../../../../../store/Slices/CarsSlice'
import {
    ChangeButton,
    CancelButton,
} from '../../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import cl from './CarItemButtons.module.scss'

interface ICarItemButtonsPRops {
    carId: string
}

const CarItemButtons: React.FC<ICarItemButtonsPRops> = ({ carId }) => {
    const dispatch = useAppDispatch()
    const { filter } = useAppSelector((state) => state.cars)

    const deleteCarById = async (selectedCar: string) => {
        await dispatch(deleteCar(selectedCar))
        await dispatch(getCarsByParams({ ...filter.params, page: filter.currentPage, limit: 4 }))
    }

    return (
        <div className={cl.button_container}>
            <Button type="button" className={cl.button} title="Изменить">
                <div className={cl.button_img}>{ChangeButton}</div>
            </Button>
            <Button
                type="button"
                className={cl.button}
                title="Удалить"
                onClick={() => deleteCarById(carId)}
            >
                <div className={cl.button_img}>{CancelButton}</div>
            </Button>
        </div>
    )
}

export default CarItemButtons
