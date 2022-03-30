import React from 'react'
import Input from '../../components/UI/Inputs/Input/Input'
import cl from './Authorization.module.scss'
import MainLogo from './MainLogo'

const Authorization: React.FC = () => {
    return (
        <section className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.header}>
                    <div className={cl.headerLogo}>
                        <MainLogo />
                    </div>
                    <h2 className={cl.headerTitle}>Need for drive</h2>
                </div>
                <form className={cl.form}>
                    <h3 className={cl.formHeader}>Вход</h3>
                    <div className={cl.formInputs}>
                        <Input
                            name="username"
                            label="Почта"
                            type="text"
                            placeholder="Введите логин"
                        />
                        <Input
                            name="password"
                            label="Пароль"
                            type="text"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <div className={cl.formButtons}>
                        <button type="button" className={cl.registerButton}>
                            Запросить доступ
                        </button>
                        <button type="submit" className={cl.enterButton}>
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Authorization
