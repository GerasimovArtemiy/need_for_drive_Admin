import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { useCarFormInputs } from '../../../hooks/useCarFormInputs'
import { useCarInfoItems } from '../../../hooks/useCarInfoItems'
import { routerPath } from '../../../routes/routerPath'
import { getCarById, getCategory, resetCarById } from '../../../store/Slices/CarsSlice'
import MyLoader from '../../Loader/MyLoader'
import CarEditSection from './CarEditSection/CarEditSection'
import InfoSection from '../InfoSection/InfoSection'
import carShadow from '../../../assets/img/car-shadow.png'
import cl from './EditCarPage.module.scss'

const EditCarPage: React.FC = () => {
    const { carId } = useParams()
    const dispatch = useAppDispatch()
    const location = useLocation()
    const { carById, category, putCar } = useAppSelector((state) => state.cars)
    const setInputs = useCarFormInputs()
    const carInputs = setInputs(carById.selectCar)
    const setInfoItems = useCarInfoItems()
    const items = setInfoItems(carById.selectCar)
    const getImg = (): string => {
        if (carById.selectCar.thumbnail) {
            return carById.selectCar.thumbnail.path
        } else {
            return carShadow
        }
    }

    useEffect(() => {
        if (carId) {
            dispatch(getCarById(carId))
            dispatch(getCategory())
        }
        dispatch(getCategory())
    }, [putCar, carId])

    if (location.pathname === routerPath.carAdd) {
        dispatch(resetCarById())
    }

    if (carId && carById.status === 'resolved') {
        return (
            <div className={cl.editCar}>
                <div className={cl.editCar_container}>
                    <InfoSection image={getImg()} title="Модель" items={items} />
                    <CarEditSection
                        car={carById.selectCar}
                        categories={category.data}
                        carInputs={carInputs}
                    />
                </div>
            </div>
        )
    } else if (carId) {
        return (
            <div className={cl.editCar}>
                <div className={cl.editCar_container}>
                    <div className={cl.loaderContainer}>
                        <MyLoader />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={cl.editCar}>
                <div className={cl.editCar_container}>
                    <CarEditSection
                        car={carById.selectCar}
                        categories={category.data}
                        carInputs={carInputs}
                    />
                </div>
            </div>
        )
    }
}

export default EditCarPage
