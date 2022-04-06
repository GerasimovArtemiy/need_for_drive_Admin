import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Authorization from '../pages/Authorization/Authorization'
import Registration from '../pages/Registration/Registration'
import AdminPage from '../pages/AdminPage/AdminPage'
import OrderTab from '../components/AdminTabs/OrderTab/OrderTab'
import CarTab from '../components/AdminTabs/CarTab/CarTab'
import CityTab from '../components/AdminTabs/CityTab/CityTab'
import RateTab from '../components/AdminTabs/RateTab/RateTab'
import { routerPath } from './routerPath'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routerPath.authorization} element={<Authorization />} />
            <Route path={routerPath.registration} element={<Registration />} />
            <Route path={routerPath.adminPanel} element={<AdminPage />}>
                <Route path={routerPath.orderList} element={<OrderTab />} />
                <Route path={routerPath.carList} element={<CarTab />} />
                <Route path={routerPath.cityList} element={<CityTab />} />
                <Route path={routerPath.rateList} element={<RateTab />} />
            </Route>
        </Routes>
    )
}

export default Router
