import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer_container}>
                <nav className={cl.footer_links}>
                    <NavLink className={cl.footer_link} to="/">
                        Главная страница
                    </NavLink>
                    <NavLink className={cl.footer_link} to="/">
                        Ссылка
                    </NavLink>
                </nav>
                <p className={cl.footer_copyright}>Copyright © 2022 Simbirsoft</p>
            </div>
        </footer>
    )
}

export default Footer
