import React from 'react'
import Checkbox from './Checkbox/Checkbox'
import { ICheckbox } from './Checkbox/CheckboxInterface'
import cl from './Checkbox/Checkbox.module.scss'
interface ICheckboxGroupProps {
    checkboxes: ICheckbox[]
}
const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({ checkboxes }) => {
    return (
        <form className={cl.checkbox_group}>
            {checkboxes.map((checkbox) => (
                <Checkbox key={checkbox.id} checkbox={checkbox} />
            ))}
        </form>
    )
}

export default CheckboxGroup
