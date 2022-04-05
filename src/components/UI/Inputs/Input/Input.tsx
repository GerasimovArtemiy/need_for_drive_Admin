import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IFormValues } from '../../../../pages/Authorization/Authorization'
import cl from './Input.module.scss'

interface IPropsInput {
    register: UseFormRegister<IFormValues>
    name: 'username' | 'password' | 'confirmPassword'
    label: string
    type: string
    placeholder: string
}

const Input: React.FC<IPropsInput> = (props) => {
    const { register, name, label, type, placeholder } = props

    return (
        <div className={cl.container}>
            <label className={cl.label} htmlFor={name}>
                {label}
            </label>
            <input
                {...register(name, {
                    required: 'Поле обязательно к заполнению',
                    pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'Используйте только латинские буквы и цифры',
                    },
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов',
                    },
                })}
                type={type}
                name={name}
                className={cl.input}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
