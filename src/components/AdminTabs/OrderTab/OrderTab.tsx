import React, { useEffect, useState } from 'react'
import OrderService from '../../../API/orderService'
import Pagination from '../../Pagination/Pagination'
import OrderItem from './OrderItem/OrderItem'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import MyLoader from '../../Loader/MyLoader'
import { IOrder } from '../../Interfaces/OrderInterface'
import cl from './OrderTab.module.scss'

const OrderTab: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [orders, setOrders] = useState<IOrder[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const limit = 5
    const changePage = (page: number) => {
        setCurrentPage(page)
    }
    useEffect(() => {
        async function getLimitOrders() {
            setIsLoading(true)
            const { data } = await OrderService.getOrders({ page: currentPage, limit: limit })
            setOrders(data.data)
            setTotalCount(data.count)
            setIsLoading(false)
        }
        getLimitOrders()
        async function sas() {
            const { data } = await OrderService.getOrderStatuses()
            console.log(data)
        }
        sas()
    }, [currentPage])

    return (
        <section className={cl.order}>
            <h2 className={cl.order_title}>Заказы</h2>
            <div className={cl.order_container}>
                <AdminTabsHeaders />
                {isLoading ? (
                    <MyLoader />
                ) : (
                    orders.map((order) => <OrderItem key={order.id} order={order} />)
                )}
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
