import React, { useEffect, useState } from 'react'
import Pagination from '../../Pagination/Pagination'
import OrderItem from './OrderItem/OrderItem'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import MyLoader from '../../Loader/MyLoader'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { getOrders, setCurrentPage } from '../../../store/Slices/OrderSlice'
import cl from './OrderTab.module.scss'

const OrderTab: React.FC = () => {
    const limit = 6
    const dispatch = useAppDispatch()
    const { orders, orderStatuses, filterOrders } = useAppSelector((state) => state.order)
    const { allCars } = useAppSelector((state) => state.cars)
    const { cities } = useAppSelector((state) => state.city)

    const changePage = (page: number) => {
        dispatch(setCurrentPage(page))
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
        dispatch(getOrders({ ...filterOrders.params, page: filterOrders.currentPage, limit }))
    }, [filterOrders.currentPage])

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
                    currentPage={filterOrders.currentPage}
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
