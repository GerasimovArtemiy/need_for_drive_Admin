import React from 'react'
import Button from '../../UI/Buttons/Button'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
import OrderItem from './OrderItem/OrderItem'
import cl from './OrderTab.module.scss'

const OrderTab: React.FC = () => {
    return (
        <section className={cl.order}>
            <h2 className={cl.order_title}>Заказы</h2>
            <div className={cl.order_container}>
                <div className={cl.filters}>
                    <div className={cl.filters_container}>
                        <SelectFilter />
                        <SelectFilter />
                        <SelectFilter />
                    </div>
                    <div className={cl.filters_btns}>
                        <Button type="button" title="Сбросить" className={cl.btn_reset} />
                        <Button type="button" title="Применить" className={cl.btn} />
                    </div>
                </div>
                {/* Здесь будет МАР! */}
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <div className={cl.pagination}>
                    « 1 ... 4 <span>5</span> 6 ... 31 »
                </div>
            </div>
        </section>
    )
}

export default OrderTab
