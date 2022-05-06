import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { useErrorPage } from '../../hooks/useErrorPage'
import { setDropMenuProfile } from '../../store/Slices/ModalSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { Outlet, useNavigate } from 'react-router-dom'
import { routerPath } from '../../routes/routerPath'
import cl from './AdminPage.module.scss'
import ErrorPage from '../ErrorPage/ErrorPage'

const AdminPage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isError = useErrorPage()
    const { isDropMenuProfile } = useAppSelector((state) => state.modal)
    const takenToken = localStorage.getItem('accessToken')

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
                {isError.isError ? <ErrorPage title={isError.errorTitle} /> : <Outlet />}
                <Footer />
            </div>
        </div>
    )
}

export default AdminPage
