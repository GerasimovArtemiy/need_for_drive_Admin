import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import { routerPath } from '../../routes/routerPath'
import AuthAndRegBlock from '../../components/AuthAndRegBlock/AuthAndRegBlock'
import cl from './Authorization.module.scss'

const Authorization: React.FC = () => {
    return (
        <AuthAndRegBlock>
            <form className={cl.form}>
                <h3 className={cl.form_header}>Вход</h3>
                <div className={cl.form_inputs}>
                    <Input name="username" label="Почта" type="text" placeholder="Введите почту" />
                    <Input
                        name="password"
                        label="Пароль"
                        type="password"
                        placeholder="Введите пароль"
                    />
                </div>
                <div className={cl.form_buttons}>
                    <NavLink to={routerPath.registration}>
                        <Button
                            type="button"
                            title="Запросить доступ"
                            className={cl.registerButton}
                        />
                    </NavLink>
                    <NavLink to={routerPath.adminPanel}>
                        <Button type="button" title="Войти" className={cl.enterButton} />
                    </NavLink>
                </div>
            </form>
        </AuthAndRegBlock>
    )
}
export default Authorization
