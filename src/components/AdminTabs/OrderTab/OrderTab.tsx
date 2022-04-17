import React, { useEffect, useState } from 'react'
import OrderService from '../../../API/orderService'
import Pagination from '../../Pagination/Pagination'
import Button from '../../UI/Buttons/Button'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
import OrderItem from './OrderItem/OrderItem'
import cl from './OrderTab.module.scss'
import { IOrder } from '../../Interfaces/OrderInterface'

const OrderTab: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [orders, setOrders] = useState<IOrder[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)

    const limit = 5
    const changePage = (page: number) => {
        setCurrentPage(page)
    }
    useEffect(() => {
        async function getLimitOrders() {
            const { data } = await OrderService.getOrders({ page: currentPage, limit: limit })
            setOrders(data.data)
            setTotalCount(data.count)
        }
        getLimitOrders()
    }, [currentPage])

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
                {orders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                ))}
                <Pagination
                    className={cl.paginationSection}
                    currentPage={currentPage}
                    totalCount={totalCount}
                    pageSize={limit}
                    onPageChange={changePage}
                    siblingCount={1}
                />
            </div>
        </section>
    )
}

export default OrderTab
