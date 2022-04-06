import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { setDropMenuProfile } from '../../store/Slices/ModalSlice'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { routerPath } from '../../routes/routerPath'
import cl from './AdminPage.module.scss'

const AdminPage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const takenToken = localStorage.getItem('accessToken')
    const { isDropMenuProfile } = useAppSelector((state) => state.modal)

    const closeDropMenu = (): void => {
        if (isDropMenuProfile) dispatch(setDropMenuProfile(false))
    }

    useEffect(() => {
        if (!takenToken) navigate(routerPath.authorization)
    }, [takenToken])

    return (
        <div onClick={() => closeDropMenu()} className={cl.wrapper}>
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
