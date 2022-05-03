import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { useOrderInfoItems } from '../../../hooks/useOrderInfoItems'
import { getOrderById } from '../../../store/Slices/OrderSlice'
import MyLoader from '../../Loader/MyLoader'
import InfoSection from '../InfoSection/InfoSection'
import carShadow from '../../../assets/img/car-shadow.png'
import cl from './EditOrderPage.module.scss'

const EditOrderPage: React.FC = () => {
    const { orderId } = useParams()
    const dispatch = useAppDispatch()
    const { orderById } = useAppSelector((state) => state.order)
    const orderItems = useOrderInfoItems()
    const items = orderItems(orderById.selectOrder)
    const getImg = (): string => {
        if (orderById.selectOrder.carId) {
            return orderById.selectOrder.carId.thumbnail.path
        } else {
            return carShadow
        }
    }

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [])

    return (
        <div className={cl.editOrder}>
            <div className={cl.editOrder_container}>
                {orderById.status === 'resolved' ? (
                    <InfoSection title={`Заказ №${orderId}`} image={getImg()} items={items} />
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
