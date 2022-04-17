import React from 'react'
import cl from './OrderItem.module.scss'
import CheckboxGroup from '../../../UI/Inputs/Checkboxes/CheckboxGroup'
import OrderItemButtons from './OrderItemButtons/OrderItemButtons'
import { IOrder } from '../../../Interfaces/OrderInterface'
import { dateConverter } from '../../../../utils/DateConverter'

interface IOrderItemProps {
    order: IOrder
}

const OrderItem: React.FC<IOrderItemProps> = ({ order }) => {
    const checkboxItems = [
        { id: 0, title: 'Полный бак', value: 'Полный бак', checked: order.isFullTank },
        {
            id: 1,
            title: 'Детское кресло',
            value: 'Детское кресло',
            checked: order.isNeedChildChair,
        },
        { id: 2, title: 'Правый руль', value: 'Правый руль', checked: order.isRightWheel },
    ]
    return (
        <div className={cl.order}>
            <div className={cl.order_info}>
                <div className={cl.main_info}>
                    <div className={cl.img_container}>
                        {order.carId ? (
                            <img className={cl.img} src={order.carId.thumbnail.path} alt="car" />
                        ) : (
                            <span>Нет фото</span>
                        )}
                    </div>
                    <div className={cl.descr}>
                        <div className={cl.descr_item}>
                            <span className={cl.descr_strong}>
                                {order.carId ? order.carId.name : 'Не известно'}
                            </span>{' '}
                            в{' '}
                            <span className={cl.descr_strong}>
                                {order.cityId ? order.cityId.name : 'Не известно'}
                            </span>
                            , {order.pointId ? order.pointId.address : 'Не известно'}
                        </div>
                        <div className={cl.descr_item}>
                            {' '}
                            {order.dateFrom ? dateConverter(order.dateFrom) : 'Не известно'} {' — '}
                            {order.dateTo ? dateConverter(order.dateTo) : 'Не известно'}
                        </div>
                        <div className={cl.descr_item}>
                            Цвет :{' '}
                            <span className={cl.strong}>
                                {order.color ? order.color : 'Не известно'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cl.checkbox}>
                    <CheckboxGroup checkboxes={checkboxItems} />
                </div>

                <div className={cl.price}> {order.price ? order.price : 'Не известно'}</div>
                <OrderItemButtons />
            </div>
        </div>
    )
}

export default OrderItem
