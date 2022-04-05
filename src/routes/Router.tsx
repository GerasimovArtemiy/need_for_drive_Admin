import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Authorization from '../pages/Authorization/Authorization'
import AdminPage from '../pages/AdminPage/AdminPage'
import OrderTab from '../components/AdminTabs/OrderTab/OrderTab'
import { routerPath } from './routerPath'
import Registration from '../pages/Registration/Registration'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routerPath.authorization} element={<Authorization />} />
            <Route path={routerPath.registration} element={<Registration />} />
            <Route path={routerPath.adminPanel} element={<AdminPage />}>
                <Route path={routerPath.orderList} element={<OrderTab />} />
            </Route>
        </Routes>
    )
}

export default Router
