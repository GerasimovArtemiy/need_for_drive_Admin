import React from 'react'
import cl from './OrderItem.module.scss'
import carImg from '../../../../assets/img/car-img.jpg'
import CheckboxGroup from '../../../UI/Inputs/Checkboxes/CheckboxGroup'
import OrderItemButtons from './OrderItemButtons/OrderItemButtons'

const OrderItem: React.FC = () => {
    const checkboxItems = [
        { id: 0, title: 'Полный бак', value: 'Полный бак', checked: true },
        { id: 1, title: 'Детское кресло', value: 'Детское кресло', checked: true },
        { id: 2, title: 'Правый руль', value: 'Правый руль', checked: false },
    ]
    return (
        <div className={cl.order}>
            <div className={cl.order_info}>
                <div className={cl.main_info}>
                    <div className={cl.img_container}>
                        <img className={cl.img} src={carImg} alt="car" />
                    </div>
                    <div className={cl.descr}>
                        <div className={cl.descr_item}>
                            <span className={cl.descr_strong}>ELANTRA</span> в{' '}
                            <span className={cl.descr_strong}>Ulianovsk</span>, Нариманова 42
                        </div>
                        <div className={cl.descr_item}>12.06.2019 12:00 — 13.06.2019 12:00</div>
                        <div className={cl.descr_item}>
                            Цвет : <span className={cl.strong}>Голубой</span>
                        </div>
                    </div>
                </div>

                <div className={cl.checkbox}>
                    <CheckboxGroup checkboxes={checkboxItems} />
                </div>

                <div className={cl.price}> 4 300 ₽</div>
                <OrderItemButtons />
            </div>
        </div>
    )
}

export default OrderItem
