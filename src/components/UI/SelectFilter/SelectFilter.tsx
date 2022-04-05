import React from 'react'
import Select from 'react-select'
import { DropdownIndicator } from './SelectIcon'
import cl from './SelectFilter.module.scss'

const SelectFilter: React.FC = () => {
    const options = [
        {
            value: 'one',
            label: 'one',
        },
        {
            value: 'tree',
            label: 'tree',
        },
        {
            value: 'two',
            label: 'two',
        },
    ]

    return (
        <div className={cl.select}>
            <Select
                components={{ DropdownIndicator }}
                className={cl.select_input}
                classNamePrefix={cl.select_input}
                options={options}
                placeholder="жмяк"
            />
        </div>
    )
}

export default SelectFilter
