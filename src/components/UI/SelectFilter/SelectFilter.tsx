import React from 'react'
import Select, { createFilter } from 'react-select'
import { DropdownIndicator } from './SelectIcon'
import cl from './SelectFilter.module.scss'
import { ISelectOption } from '../../Interfaces/SelectOptionInterface'

export interface ISelectFilterProps {
    onChange?: (item: ISelectOption) => void
    valueState: string
    placeholder: string
    name: string
    items: any
}
const filterConfig: any = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    matchFrom: 'start',
}

const SelectFilter: React.FC<ISelectFilterProps> = (props) => {
    const { onChange, valueState, placeholder, name, items } = props
    const selectOptions = items.map((item: any) => {
        return { id: item.id, value: item.name, label: item.name }
    })

    return (
        <div className={cl.select}>
            <Select
                components={{ DropdownIndicator }}
                className={cl.select_input}
                classNamePrefix={cl.select_input}
                options={selectOptions}
                name={name}
                value={
                    valueState
                        ? selectOptions.filter(
                              (option: ISelectOption) => option.value === valueState
                          )
                        : null
                }
                placeholder={placeholder}
                isSearchable
                noOptionsMessage={() => 'Не найдено'}
                filterOption={createFilter(filterConfig)}
                onChange={onChange}
            />
        </div>
    )
}

export default SelectFilter
