import React from 'react'
import Select, { createFilter } from 'react-select'
import { DropdownIndicator } from '../../../../UI/SelectFilter/SelectIcon'
import { FieldErrors } from 'react-hook-form'
import { ISelectOption } from '../../../../Interfaces/SelectOptionInterface'
import cl from './CarCategoryInput.module.scss'

interface ICategoryInputProps {
    id: string
    name: string
    placeholder: string
    optionKey: string
    items: any
    field: any
    errors: FieldErrors
}
const filterConfig: any = {
    ignoreAccents: true,
    ignoreCase: true,
    trim: true,
    matchFrom: 'start',
}
const getOptionsByKey =
    (key: string) =>
    (item: Record<string, any>): ISelectOption => ({
        id: item.id,
        value: item?.[key],
        label: item?.[key],
    })

const CarCategoryInput: React.FC<ICategoryInputProps> = (props) => {
    const { placeholder, name, items, optionKey, field, id, errors } = props
    const options = items.map(getOptionsByKey(optionKey))

    return (
        <div className={cl.input_container}>
            <label className={cl.input_label} htmlFor={name}>
                {name}
            </label>
            <Select
                {...field}
                className={cl.input}
                classNamePrefix={cl.input}
                id={id}
                name={name}
                placeholder={placeholder}
                options={options}
                components={{ DropdownIndicator }}
                noOptionsMessage={() => 'Не найдено'}
                filterOption={createFilter(filterConfig)}
            />
            {errors && errors.category && (
                <span className={cl.input_error}>{errors.category.message}</span>
            )}
        </div>
    )
}
export default CarCategoryInput
