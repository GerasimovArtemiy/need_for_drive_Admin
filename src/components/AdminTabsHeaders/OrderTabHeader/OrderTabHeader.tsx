import React from 'react'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
import Button from '../../UI/Buttons/Button'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { getOrders } from '../../../store/Slices/OrderSlice'
import cl from './OrderTabHeader.module.scss'

const OrderTabHeader: React.FC = () => {
    const dispatch = useAppDispatch()
    dispatch(getOrders({ limit: 5, page: 2 }))
    return (
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
    )
}

export default OrderTabHeader
