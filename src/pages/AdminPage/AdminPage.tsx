import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { routerPath } from '../../routes/routerPath'
import cl from './AdminPage.module.scss'

const AdminPage: React.FC = () => {
    const navigate = useNavigate()
    const takenToken = localStorage.getItem('accessToken')

    useEffect(() => {
        if (!takenToken) navigate(routerPath.authorization)
    }, [takenToken])

    return (
        <div className={cl.wrapper}>
            <div className={cl.sidebar}>
                <Navbar />
            </div>
            <div className={cl.content}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default AdminPage
