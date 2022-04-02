import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminPage from '../pages/AdminPage/AdminPage'
import { routerPath } from './routerPath'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routerPath.orderList} element={<AdminPage />}>
                <Route index element={<AdminPage />} />
            </Route>
        </Routes>
    )
}

export default Router
