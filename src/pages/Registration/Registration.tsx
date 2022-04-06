import React from 'react'
import { NavLink } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { routerPath } from '../../routes/routerPath'
import AuthAndRegBlock from '../../components/AuthAndRegBlock/AuthAndRegBlock'
import cl from './Registration.module.scss'
import Input from '../../components/UI/Inputs/Input/Input'
import Button from '../../components/UI/Buttons/Button'
import { IFormValues } from '../Authorization/Authorization'

const Registration: React.FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IFormValues>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <AuthAndRegBlock>
            <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={cl.form_header}>Регистрация</h3>
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
                        register={register}
                        name="password"
                        label="Пароль"
                        type="password"
                        placeholder="Введите пароль"
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
