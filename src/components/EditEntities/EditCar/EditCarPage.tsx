import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { useCarFormInputs } from '../../../hooks/useCarFormInputs'
import { routerPath } from '../../../routes/routerPath'
import { getCarById, getCategory, resetCarById } from '../../../store/Slices/CarsSlice'
import MyLoader from '../../Loader/MyLoader'
import CarEditSection from './CarEditSection/CarEditSection'
import CarInfoSection from './CarInfoSection/CarInfoSection'
import cl from './EditCarPage.module.scss'

const EditCarPage: React.FC = () => {
    const { carId } = useParams()
    const dispatch = useAppDispatch()
    const location = useLocation()
    const { carById, category, putCar } = useAppSelector((state) => state.cars)
    const setInputs = useCarFormInputs()
    const carInputs = setInputs(carById.selectCar)

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
                    <CarInfoSection car={carById.selectCar} />
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
