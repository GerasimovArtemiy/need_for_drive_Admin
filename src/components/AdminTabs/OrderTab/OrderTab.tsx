import React, { useEffect, useState } from 'react'
import Pagination from '../../Pagination/Pagination'
import OrderItem from './OrderItem/OrderItem'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import MyLoader from '../../Loader/MyLoader'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { getOrders } from '../../../store/Slices/OrderSlice'
import cl from './OrderTab.module.scss'

const OrderTab: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const limit = 6
    const dispatch = useAppDispatch()
    const { orders, orderStatuses } = useAppSelector((state) => state.order)
    const { allCars } = useAppSelector((state) => state.cars)
    const { cities } = useAppSelector((state) => state.city)

    const changePage = (page: number) => {
        setCurrentPage(page)
    }
    const showReadyContent = (): boolean => {
        if (
            orders.status === 'resolved' &&
            allCars.status === 'resolved' &&
            cities.status === 'resolved' &&
            orderStatuses.status === 'resolved'
        ) {
            return true
        } else {
            return false
        }
    }
    useEffect(() => {
        dispatch(getOrders({ page: currentPage, limit }))
    }, [currentPage])

    return (
        <section className={cl.order}>
            <h2 className={cl.order_title}>Заказы</h2>
            <div className={cl.order_container}>
                <AdminTabsHeaders />
                {showReadyContent() ? (
                    orders.orderItems.data.map((order) => (
                        <OrderItem key={order.id} order={order} />
                    ))
                ) : (
                    <MyLoader />
                )}
                <Pagination
                    className={cl.paginationSection}
                    currentPage={currentPage}
                    totalCount={orders.orderItems.count}
                    pageSize={limit}
                    onPageChange={changePage}
                    siblingCount={1}
                />
            </div>
        </section>
    )
}

export default OrderTab
