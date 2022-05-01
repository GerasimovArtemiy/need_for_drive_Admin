import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { useCarFormInputs } from '../../../hooks/useCarFormInputs'
import { getCarById, getCategory } from '../../../store/Slices/CarsSlice'
import MyLoader from '../../Loader/MyLoader'
import CarEditSection from './CarEditSection/CarEditSection'
import CarInfoSection from './CarInfoSection/CarInfoSection'
import cl from './EditCarPage.module.scss'

const EditCarPage: React.FC = () => {
    const { carId } = useParams()
    const dispatch = useAppDispatch()
    const { carById, category } = useAppSelector((state) => state.cars)
    const setInputs = useCarFormInputs()
    const carInputs = setInputs(carById.selectCar)

    useEffect(() => {
        dispatch(getCarById(carId))
        dispatch(getCategory())
    }, [])
    console.log(carById.selectCar)

    return (
        <div className={cl.editCar}>
            <div className={cl.editCar_container}>
                {carById.status === 'resolved' ? (
                    <>
                        <CarInfoSection car={carById.selectCar} />
                        <CarEditSection
                            car={carById.selectCar}
                            categories={category.data}
                            carInputs={carInputs}
                        />
                    </>
                ) : (
                    <div className={cl.loaderContainer}>
                        <MyLoader />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EditCarPage
