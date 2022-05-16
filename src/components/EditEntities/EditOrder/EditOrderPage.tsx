import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { useOrderInfoItems } from '../../../hooks/useOrderInfoItems'
import { useOrderFormInputs } from '../../../hooks/useOrderFormInputs'
import { getOrderById, getOrderStatuses } from '../../../store/Slices/OrderSlice'
import { getCities, getPointsById } from '../../../store/Slices/CitySlice'
import { getAllRates } from '../../../store/Slices/RateSlice'
import { getAllCars, getCarById } from '../../../store/Slices/CarsSlice'
import MyLoader from '../../Loader/MyLoader'
import InfoSection from '../InfoSection/InfoSection'
import carShadow from '../../../assets/img/car-shadow.png'
import OrderEditSection from './OrderEditSection/OrderEditSection'
import cl from './EditOrderPage.module.scss'

const EditOrderPage: React.FC = () => {
    const { orderId } = useParams()
    const dispatch = useAppDispatch()
    const { orderById, putOrder } = useAppSelector((state) => state.order)
    const orderItems = useOrderInfoItems()
    const setInputs = useOrderFormInputs()
    const orderInputs = setInputs()
    const items = orderItems(orderById.selectOrder)
    const getImg = (): string => {
        if (orderById.selectOrder.carId) {
            return orderById.selectOrder.carId.thumbnail.path
        } else {
            return carShadow
        }
    }
    const loadInputs = async () => {
        dispatch(getOrderById(orderId))
        dispatch(getCities())
        dispatch(getAllRates())
        dispatch(getAllCars())
        dispatch(getOrderStatuses())
    }
    useEffect(() => {
        loadInputs()
    }, [putOrder])

    return (
        <div className={cl.editOrder}>
            <div className={cl.editOrder_container}>
                {orderById.status === 'resolved' ? (
                    <>
                        <InfoSection title={`Заказ: ${orderId}`} image={getImg()} items={items} />
                        <OrderEditSection inputs={orderInputs} />
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

export default EditOrderPage
