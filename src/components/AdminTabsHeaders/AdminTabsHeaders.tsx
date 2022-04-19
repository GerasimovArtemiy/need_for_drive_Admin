import React from 'react'
import { useLocation } from 'react-router-dom'
import { routerPath } from '../../routes/routerPath'
import OrderTabHeader from './OrderTabHeader/OrderTabHeader'
import CarTabHeader from './CarTabHeader/CarTabHeader'
import CityTabHeader from './CityTabHeader/CityTabHeader'

const AdminTabsHeaders: React.FC = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === routerPath.orderList && <OrderTabHeader />}
            {location.pathname === routerPath.carList && <CarTabHeader />}
            {location.pathname === routerPath.cityList && <CityTabHeader />}
            {location.pathname === routerPath.rateList && <CityTabHeader />}
        </>
    )
}

export default AdminTabsHeaders
