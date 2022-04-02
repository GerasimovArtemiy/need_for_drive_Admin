import React from 'react'
import { ICheckbox } from './CheckboxInterface'
import cl from './Checkbox.module.scss'

interface ICheckboxProps {
    checkbox: ICheckbox
}
const Checkbox: React.FC<ICheckboxProps> = ({ checkbox }) => {
    const { id, title, checked } = checkbox

    return (
        <div className={cl.checkbox_container}>
            <input
                name={`checkbox${id}`}
                type="checkbox"
                defaultChecked={checked}
                className={cl.checkbox}
            />
            <label htmlFor={`checkbox${id}`} className={cl.checkbox_label}>
                {title}
            </label>
        </div>
    )
}

export default Checkbox
