import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import { routerPath } from '../../routes/routerPath'
import cl from './Authorization.module.scss'
import MainLogo from './MainLogo'

const Authorization: React.FC = () => {
    return (
        <section className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.header}>
                    <div className={cl.header_logo}>
                        <MainLogo />
                    </div>
                    <h2 className={cl.header_title}>Need for drive</h2>
                </div>
                <form className={cl.form}>
                    <h3 className={cl.form_header}>Вход</h3>
                    <div className={cl.form_inputs}>
                        <Input
                            name="username"
                            label="Почта"
                            type="text"
                            placeholder="Введите логин"
                        />
                        <Input
                            name="password"
                            label="Пароль"
                            type="password"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <div className={cl.form_buttons}>
                        <Button
                            type="button"
                            title="Запросить доступ"
                            className={cl.registerButton}
                        />
                        <NavLink to={routerPath.adminPanel}>
                            <Button type="button" title="Войти" className={cl.enterButton} />
                        </NavLink>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Authorization
