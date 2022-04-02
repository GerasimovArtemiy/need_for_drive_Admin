import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import cl from './AdminPage.module.scss'

const AdminPage: React.FC = () => {
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
