import React from 'react'
import { useLocation } from 'react-router-dom'
import { routerPath } from '../../routes/routerPath'
import OrderTabHeader from './OrderTabHeader/OrderTabHeader'
import CarTabHeader from './CarTabHeader/CarTabHeader'

const AdminTabsHeaders: React.FC = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === routerPath.orderList && <OrderTabHeader />}
            {location.pathname === routerPath.carList && <CarTabHeader />}
        </>
    )
}

export default AdminTabsHeaders
