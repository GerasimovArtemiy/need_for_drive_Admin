import React from 'react'
import { NavLink } from 'react-router-dom'
import { routerPath } from '../../routes/routerPath'
import AuthAndRegBlock from '../../components/AuthAndRegBlock/AuthAndRegBlock'
import cl from './Registration.module.scss'
import Input from '../../components/UI/Inputs/Input/Input'
import Button from '../../components/UI/Buttons/Button'

const Registration: React.FC = () => {
    return (
        <AuthAndRegBlock>
            <form className={cl.form}>
                <h3 className={cl.form_header}>Регистрация</h3>
                <div className={cl.form_inputs}>
                    <Input name="username" label="Почта" type="text" placeholder="Введите почту" />
                    <Input
                        name="password"
                        label="Пароль"
                        type="password"
                        placeholder="Введите пароль"
                    />
                    <Input
                        name="confirmPassword"
                        label="Повторите пароль"
                        type="password"
                        placeholder="Повторите введенный пароль"
                    />
                </div>
                <div className={cl.form_buttons}>
                    <NavLink to={routerPath.authorization}>
                        <Button
                            type="button"
                            title="Войти с логином и паролем"
                            className={cl.registerButton}
                        />
                    </NavLink>
                    <NavLink to={routerPath.adminPanel}>
                        <Button type="button" title="Регистрация" className={cl.enterButton} />
                    </NavLink>
                </div>
            </form>
        </AuthAndRegBlock>
    )
}

export default Registration
