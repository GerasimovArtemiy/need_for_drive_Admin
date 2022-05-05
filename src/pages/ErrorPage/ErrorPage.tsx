import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import cl from './ErrorPage.module.scss'

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={cl.error_container}>
            <div className={cl.error}>
                <span className={cl.error_code}>500</span>
                <h3>Что то пошло не так</h3>
                <p>Попробуйте перезагрузить страницу</p>
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
