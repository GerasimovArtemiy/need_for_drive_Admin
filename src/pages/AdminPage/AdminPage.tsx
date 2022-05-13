import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import { setDropMenuProfile } from '../../store/Slices/ModalSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { routerPath } from '../../routes/routerPath'
import cl from './AdminPage.module.scss'
import { resetError } from '../../store/Slices/ErrorSlice'

const AdminPage: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { isDropMenuProfile } = useAppSelector((state) => state.modal)
    const { error } = useAppSelector((state) => state.error)
    const takenToken = localStorage.getItem('accessToken')

    const closeDropMenu = (): void => {
        if (isDropMenuProfile) dispatch(setDropMenuProfile(false))
    }

    useEffect(() => {
        if (!takenToken) navigate(routerPath.authorization)
    }, [takenToken])

    useEffect(() => {
        if (error.isError) {
            navigate(routerPath.error)
        }
    }, [error])

    useEffect(() => {
        if (location.pathname !== routerPath.error && error.name !== '') {
            dispatch(resetError())
        }
    }, [location.pathname])

    return (
        <div onClick={() => closeDropMenu()} className={cl.wrapper}>
            <div className={cl.sidebar}>
                <Navbar />
            </div>
            <div className={cl.content}>
                <Header />
                {location.pathname === routerPath.adminPanel ? <WelcomeSection /> : null}
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default AdminPage
