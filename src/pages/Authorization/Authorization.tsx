import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import Button from '../../components/UI/Buttons/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import { routerPath } from '../../routes/routerPath'
import AuthAndRegBlock from '../../components/AuthAndRegBlock/AuthAndRegBlock'
import cl from './Authorization.module.scss'
import { login } from '../../store/Slices/AuthSlice'

export interface IFormValues {
    username: string
    password: string
    confirmPassword: string
}

const Authorization: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { error, status } = useAppSelector((state) => state.auth)

    useEffect(() => {
        const takenToken = localStorage.getItem('accessToken')
        if (status === 'resolved' && takenToken) navigate(routerPath.adminPanel)
    }, [status, navigate])

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IFormValues>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        dispatch(login(data))
        reset()
    }

    return (
        <AuthAndRegBlock>
            <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={cl.form_header}>Вход</h3>
                <div className={cl.form_inputs}>
                    <Input
                        register={register}
                        name="username"
                        label="Почта"
                        type="text"
                        placeholder="Введите почту"
                    />
                    <div className={cl.form_error}>
                        {errors?.username?.message && <p>{errors.username.message}</p>}
                    </div>
                    <Input
                        name="password"
                        register={register}
                        label="Пароль"
                        type="password"
                        placeholder="Введите пароль"
                    />
                    <div className={cl.form_error}>
                        {errors?.password?.message && <p>{errors.password.message}</p>}
                    </div>
                    <div className={cl.access_error}>{error}</div>
                </div>
                <div className={cl.form_buttons}>
                    <NavLink to={routerPath.registration}>
                        <Button
                            type="button"
                            title="Запросить доступ"
                            className={cl.registerButton}
                        />
                    </NavLink>
                    <Button type="submit" title="Войти" className={cl.enterButton} />
                </div>
            </form>
        </AuthAndRegBlock>
    )
}
export default Authorization
