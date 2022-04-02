import React from 'react'
import Checkbox from './Checkbox/Checkbox'
import { ICheckbox } from './Checkbox/CheckboxInterface'

interface ICheckboxGroupProps {
    checkboxes: ICheckbox[]
}
const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({ checkboxes }) => {
    return (
        <form>
            {checkboxes.map((checkbox) => (
                <Checkbox key={checkbox.id} checkbox={checkbox} />
            ))}
        </form>
    )
}

export default CheckboxGroup
