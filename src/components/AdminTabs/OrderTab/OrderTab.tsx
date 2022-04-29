import React, { useEffect } from 'react'
import Pagination from '../../Pagination/Pagination'
import OrderItem from './OrderItem/OrderItem'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import MyLoader from '../../Loader/MyLoader'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { getOrders, resetOrderFilter, setOrderCurrentPage } from '../../../store/Slices/OrderSlice'
import cl from './OrderTab.module.scss'
import NoDataBlock from '../../NoDataBlock/NoDataBlock'

const OrderTab: React.FC = () => {
    const limit = 4
    const dispatch = useAppDispatch()
    const { orders, orderStatuses, filter } = useAppSelector((state) => state.order)
    const { allCars } = useAppSelector((state) => state.cars)
    const { cities } = useAppSelector((state) => state.city)

    const changePage = (page: number) => {
        dispatch(setOrderCurrentPage(page))
    }
    const checkReadyContent = (): boolean => {
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
        dispatch(getOrders({ ...filter.params, page: filter.currentPage, limit }))
    }, [filter.currentPage])

    useEffect(() => {
        return () => {
            dispatch(resetOrderFilter())
        }
    }, [])

    const showOrders = () => {
        if (orders.orderItems.data.length) {
            return orders.orderItems.data.map((order) => <OrderItem key={order.id} order={order} />)
        } else {
            return <NoDataBlock />
        }
    }

    return (
        <section className={cl.order}>
            <h2 className={cl.order_title}>Заказы</h2>
            <div className={cl.order_container}>
                <AdminTabsHeaders />
                {checkReadyContent() ? showOrders() : <MyLoader />}
                <Pagination
                    className={cl.paginationSection}
                    currentPage={filter.currentPage}
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
