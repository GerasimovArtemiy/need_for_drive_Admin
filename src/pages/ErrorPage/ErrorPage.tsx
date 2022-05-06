import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import cl from './ErrorPage.module.scss'

interface IErrorPageProps {
    title: string
}

const ErrorPage: React.FC<IErrorPageProps> = ({ title }) => {
    const navigate = useNavigate()
    return (
        <div className={cl.error_container}>
            <div className={cl.error}>
                <span className={cl.error_code}>500</span>
                <h3>{title === '' ? 'Что то пошло не так' : title}</h3>
                <p>
                    {title === ''
                        ? 'Такой страницы не существует, вернитесь назад'
                        : 'Попробуйте перезагрузить страницу'}
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
