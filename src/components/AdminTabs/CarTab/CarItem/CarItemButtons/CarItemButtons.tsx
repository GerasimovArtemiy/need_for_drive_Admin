import React from 'react'
import Button from '../../../../UI/Buttons/Button'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux-hooks'
import { deleteCar, getCarsByParams } from '../../../../../store/Slices/CarsSlice'
import {
    ChangeButton,
    CancelButton,
} from '../../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import { routerPath } from '../../../../../routes/routerPath'
import cl from './CarItemButtons.module.scss'
import { useNavigate } from 'react-router-dom'

interface ICarItemButtonsPRops {
    carId: string
}

const CarItemButtons: React.FC<ICarItemButtonsPRops> = ({ carId }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { filter } = useAppSelector((state) => state.cars)

    const showEditCarPage = () => {
        navigate(`${routerPath.carList}/${carId}`)
    }
    const deleteCarById = async (selectedCar: string) => {
        await dispatch(deleteCar(selectedCar))
        await dispatch(getCarsByParams({ ...filter.params, page: filter.currentPage, limit: 4 }))
    }

    return (
        <div className={cl.button_container}>
            <Button
                type="button"
                className={cl.button}
                title="Изменить"
                onClick={() => showEditCarPage()}
            >
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
