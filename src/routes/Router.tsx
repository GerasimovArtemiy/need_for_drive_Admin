import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Authorization from '../pages/Authorization/Authorization'
import Registration from '../pages/Registration/Registration'
import AdminPage from '../pages/AdminPage/AdminPage'
import OrderTab from '../components/AdminTabs/OrderTab/OrderTab'
import CarTab from '../components/AdminTabs/CarTab/CarTab'
import CityTab from '../components/AdminTabs/CityTab/CityTab'
import EditCarPage from '../components/EditEntities/EditCar/EditCarPage'
import RateTab from '../components/AdminTabs/RateTab/RateTab'
import EditOrderPage from '../components/EditEntities/EditOrder/EditOrderPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { routerPath } from './routerPath'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routerPath.authorization} element={<Authorization />} />
            <Route path={routerPath.registration} element={<Registration />} />
            <Route path={routerPath.adminPanel} element={<AdminPage />}>
                <Route path={routerPath.orderList} element={<OrderTab />} />
                <Route path={routerPath.orderEdit} element={<EditOrderPage />} />
                <Route path={routerPath.carList} element={<CarTab />} />
                <Route path={routerPath.cityList} element={<CityTab />} />
                <Route path={routerPath.carEdit} element={<EditCarPage />} />
                <Route path={routerPath.carAdd} element={<EditCarPage />} />
                <Route path={routerPath.rateList} element={<RateTab />} />
                <Route path={routerPath.error} element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}

export default Router
