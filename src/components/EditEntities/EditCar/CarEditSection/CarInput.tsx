import React from 'react'
import { ICarFormValues, CarInputsValues } from '../../../../hooks/useCarFormInputs'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import cl from './CarEditSection.module.scss'

interface ICarInputProps {
    name: CarInputsValues
    value?: string
    label: string
    type: string
    register: UseFormRegister<ICarFormValues>
    errors: FieldErrors
    isValid: boolean
    placeholder: string
    defaultValue: string
}

const CarInput: React.FC<ICarInputProps> = (props) => {
    const { name, value, label, type, register, errors, placeholder, defaultValue } = props
    const { ref, ...inputProps } = register(name)
    const showError = () => {
        if (name === 'name' && errors.name) return errors.name.message
        if (name === 'number' && errors.number) return errors.number.message
        if (name === 'tank' && errors.tank) return errors.tank.message
        if (name === 'priceMin' && errors.priceMin) return errors.priceMin.message
        if (name === 'priceMax' && errors.priceMax) return errors.priceMax.message
        if (name === 'description' && errors.description) return errors.description.message
    }

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
            <span className={cl.error}>{showError()}</span>
        </div>
    )
}

export default CarInput
