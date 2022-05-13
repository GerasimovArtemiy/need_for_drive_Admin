import React from 'react'
import { ICarFormValues, CarInputsValues } from '../../../../hooks/useCarFormInputs'
import { UseFormRegister } from 'react-hook-form'
import cl from './CarEditSection.module.scss'

interface ICarInputProps {
    name: CarInputsValues
    value?: string
    label: string
    type: string
    register: UseFormRegister<ICarFormValues>
    error: any
    isValid: boolean
    placeholder: string
    defaultValue: string
}

const CarInput: React.FC<ICarInputProps> = (props) => {
    const { name, value, label, type, register, error, placeholder, defaultValue } = props
    const { ref, ...inputProps } = register(name)

    return (
        <div className={cl.input_item}>
            <label htmlFor={name}>{label}</label>
            <input
                {...inputProps}
                className={cl.input_item_text}
                ref={ref}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
            <span className={cl.error}>{error?.message}</span>
        </div>
    )
}

export default CarInput
