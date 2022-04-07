import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IAuthFormValues } from '../../../Interfaces/AuthValidationInterface'
import cl from './Input.module.scss'

interface IPropsInput {
    register: UseFormRegister<IAuthFormValues>
    name: 'firstName' | 'username' | 'password' | 'confirmPassword'
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
                {...register(name)}
                type={type}
                name={name}
                className={cl.input}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
