import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux-hooks'
import Button from '../../components/UI/Buttons/Button'
import cl from './ErrorPage.module.scss'

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()
    const { error } = useAppSelector((state) => state.error)

    useEffect(() => {
        if (!error.isError)
            setTimeout(() => {
                navigate(-1)
            }, 4000)
    }, [error])

    return (
        <div className={cl.error_container}>
            <div className={cl.error}>
                <span className={cl.error_code}>{error.isError ? error?.name : 'o_0'}</span>
                <h3>{error.isError ? error?.message : 'Хм... Что то пошло не так.'}</h3>
                <p>
                    {error.isError
                        ? 'Попробуйте перезагрузить страницу'
                        : 'Стоп! Такой страницы не существует. Включаем задний ход... :)'}
                </p>
                <Button
                    title="Назад"
                    type="button"
                    className={cl.error_btn}
                    onClick={() => navigate(-1)}
                />
            </div>
        </div>
    )
}

export default ErrorPage
