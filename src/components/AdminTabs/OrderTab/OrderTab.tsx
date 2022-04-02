import React from 'react'
import Button from '../../UI/Buttons/Button'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
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
                        <Button type="button" title="Отмена" className={cl.btn_red} />
                        <Button type="button" title="Применить" className={cl.btn} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderTab
