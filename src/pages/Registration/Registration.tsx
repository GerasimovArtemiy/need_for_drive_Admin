import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { routerPath } from '../../routes/routerPath'
import AuthAndRegBlock from '../../components/AuthAndRegBlock/AuthAndRegBlock'
import cl from './Registration.module.scss'
import Input from '../../components/UI/Inputs/Input/Input'
import Button from '../../components/UI/Buttons/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../../YupValidations/RegisterValidation'
import { registration, getUserName } from '../../store/Slices/AuthSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { IAuthFormValues } from '../../components/Interfaces/AuthValidationInterface'

const Registration: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { status } = useAppSelector((state) => state.auth)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IAuthFormValues>({
        mode: 'onBlur',
        resolver: yupResolver(RegisterSchema),
    })
    useEffect(() => {
        const takenToken = localStorage.getItem('accessToken')
        if (status === 'resolved' && takenToken) navigate(routerPath.adminPanel)
    }, [status, navigate])

    const onSubmit: SubmitHandler<IAuthFormValues> = (data) => {
        dispatch(registration(data))
        dispatch(getUserName(data.firstName))
        alert('Доступ разрешен.')
        reset()
    }

    return (
        <AuthAndRegBlock>
            <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={cl.form_header}>Регистрация</h3>
                <div className={cl.form_inputs}>
                    <Input
                        register={register}
                        name="firstName"
                        label="Ваше имя"
                        type="text"
                        placeholder="Введите ваше имя"
                    />
                    <div className={cl.form_error}>
                        {errors?.firstName?.message && <p>{errors.firstName.message}</p>}
                    </div>
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
                        register={register}
                        name="password"
                        label="Пароль"
                        type="password"
                        placeholder="Придумайте пароль"
                    />
                    <div className={cl.form_error}>
                        {errors?.password?.message && <p>{errors.password.message}</p>}
                    </div>
                    <Input
                        register={register}
                        name="confirmPassword"
                        label="Повторите пароль"
                        type="password"
                        placeholder="Повторите введенный пароль"
                    />
                    <div className={cl.form_error}>
                        {errors?.confirmPassword?.message && (
                            <p>{errors.confirmPassword.message}</p>
                        )}
                    </div>
                </div>
                <div className={cl.form_buttons}>
                    <NavLink to={routerPath.authorization}>
                        <Button
                            type="button"
                            title="Войти с логином и паролем"
                            className={cl.registerButton}
                        />
                    </NavLink>
                    <Button type="submit" title="Регистрация" className={cl.enterButton} />
                </div>
            </form>
        </AuthAndRegBlock>
    )
}

export default Registration
