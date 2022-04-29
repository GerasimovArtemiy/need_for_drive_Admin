import React from 'react'
import { useLocation } from 'react-router-dom'
import { routerPath } from '../../routes/routerPath'
import OrderTabHeader from './OrderTabHeader/OrderTabHeader'
import CarTabHeader from './CarTabHeader/CarTabHeader'
import CityTabHeader from './CityTabHeader/CityTabHeader'
import RateTabHeader from './RateTabHeader/RateTabHeader'

const AdminTabsHeaders: React.FC = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === routerPath.orderList && <OrderTabHeader />}
            {location.pathname === routerPath.carList && <CarTabHeader />}
            {location.pathname === routerPath.cityList && <CityTabHeader />}
            {location.pathname === routerPath.rateList && <RateTabHeader />}
        </>
    )
}

export default AdminTabsHeaders
