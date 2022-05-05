import React, { useEffect } from 'react'
import Select, { createFilter } from 'react-select'
import { FieldErrors } from 'react-hook-form'
import { DropdownIndicator } from '../../../UI/SelectFilter/SelectIcon'
import { ISelectOption } from '../../../Interfaces/SelectOptionInterface'
import { IOrderInputsNames } from '../../../../hooks/useOrderFormInputs'
import cl from './OrderEditSection.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks'
import { getPointsById } from '../../../../store/Slices/CitySlice'
import { getCarById } from '../../../../store/Slices/CarsSlice'

interface IOrderInputProps {
    placeholder: string
    name: IOrderInputsNames
    items: any
    optionKey: string
    field: any
    id: string
    errors: FieldErrors
    label: string
}
const filterConfig: any = {
    ignoreCase: true,
    ignoreAccents: true,
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
const OrderInput: React.FC<IOrderInputProps> = (props) => {
    const { placeholder, name, items, optionKey, field, id, errors, label } = props
    const dispatch = useAppDispatch()
    const points = useAppSelector((state) => state.city.pointsById.data)
    const carById = useAppSelector((state) => state.cars.carById.selectCar)
    const options = items && items.map(getOptionsByKey(optionKey))

    const getError = () => {
        if (name === 'city' && errors.city) return errors.city.message
        if (name === 'point' && errors.point) return errors.point.message
        if (name === 'car' && errors.car) return errors.car.message
        if (name === 'tank' && errors.tank) return errors.tank.message
        if (name === 'rate' && errors.rate) return errors.rate.message
        if (name === 'childChair' && errors.childChair) return errors.childChair.message
        if (name === 'rightWheel' && errors.rightWheel) return errors.rightWheel.message
    }

    useEffect(() => {
        if (name === 'city' && field.value) {
            dispatch(getPointsById(field.value.id))
        }
        if (name === 'car' && field.value) {
            dispatch(getCarById(field.value.id))
        }
    }, [name, field.value])

    return (
        <div className={cl.select_container}>
            <label className={cl.select_label} htmlFor={name}>
                {label}
            </label>
            <Select
                {...field}
                className={cl.select}
                classNamePrefix={cl.select}
                id={id}
                name={name}
                placeholder={placeholder}
                filterOption={createFilter(filterConfig)}
                options={options}
                noOptionsMessage={() => 'Не найдено'}
                components={{ DropdownIndicator }}
            />

            <span className={getError() ? cl.select_error : null}>{getError()}</span>
        </div>
    )
}

export default OrderInput
