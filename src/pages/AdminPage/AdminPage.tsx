import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import cl from './AdminPage.module.scss'

const AdminPage: React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.sidebar}>
                <Navbar />
            </div>
        </div>
    )
}

export default AdminPage
