import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navbarItems } from './constants'
import MainLogo from '../AuthAndRegBlock/MainLogo'
import cl from './Navbar.module.scss'

const Navbar: React.FC = () => {
    const location = useLocation()

    const handlerClassName = (path: string): string => {
        if (location.pathname === path) {
            return cl.link_container_active
        } else {
            return cl.link_container
        }
    }

    return (
        <div className={cl.container}>
            <div className={cl.logo_wrap}>
                <div className={cl.logo}>
                    <div className={cl.logo_img}>
                        <MainLogo />
                    </div>
                </div>
                <h2 className={cl.logo_title}>Need for drive</h2>
            </div>
            <nav className={cl.navbar}>
                {navbarItems.map(({ id, title, path, img }) => (
                    <NavLink title={title} key={id} className={handlerClassName(path)} to={path}>
                        <div className={cl.link_img}>{img}</div>
                        <p className={cl.link}>{title}</p>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
