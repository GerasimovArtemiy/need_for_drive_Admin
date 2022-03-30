import React from 'react'
import cl from './Input.module.scss'

interface IPropsInput {
    name: string
    label: string
    type: string
    placeholder: string
}

const Input: React.FC<IPropsInput> = (props) => {
    const { name, label, type, placeholder } = props

    return (
        <div className={cl.container}>
            <label className={cl.label} htmlFor={name}>
                {label}
            </label>
            <input type={type} name={name} className={cl.input} placeholder={placeholder} />
        </div>
    )
}

export default Input
