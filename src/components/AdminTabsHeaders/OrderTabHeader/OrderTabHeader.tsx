import React, { useEffect, useState } from 'react'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
import Button from '../../UI/Buttons/Button'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import {
    getOrderStatuses,
    getOrders,
    setOrderFilter,
    resetOrderFilter,
} from '../../../store/Slices/OrderSlice'
import { getAllCars } from '../../../store/Slices/CarsSlice'
import { getCities } from '../../../store/Slices/CitySlice'
import { ICar } from '../../Interfaces/CarInterface'
import { ICity } from '../../Interfaces/CityInterface'
import { IOrderStatus } from '../../Interfaces/OrderInterface'
import { ISelectOption } from '../../Interfaces/SelectOptionInterface'
import { IOrderParamsInterface } from '../../Interfaces/ParamsInterface'
import cl from './OrderTabHeader.module.scss'

const OrderTabHeader: React.FC = () => {
    const [car, setCar] = useState<ICar>({} as ICar)
    const [city, setCity] = useState<ICity>({} as ICity)
    const [status, setStatus] = useState<IOrderStatus>({} as IOrderStatus)

    const dispatch = useAppDispatch()
    const { allCars } = useAppSelector((state) => state.cars)
    const { cities } = useAppSelector((state) => state.city)
    const { orderStatuses } = useAppSelector((state) => state.order)

    const handleChange = (item: ISelectOption) => {
        const selectCar = allCars.data.find((car) => car.name === item.value)!
        const selectCity = cities.items.data.find((city) => city.name === item.value)!
        const selectStatus = orderStatuses.data.find((status) => status.name === item.value)!
        selectCar && setCar(selectCar)
        selectCity && setCity(selectCity)
        selectStatus && setStatus(selectStatus)
    }

    const showFilterOrders = (): void => {
        const params: IOrderParamsInterface = {
            page: 0,
            limit: 4,
            carId: car ? car.id : undefined,
            cityId: city ? city.id : undefined,
            orderStatusId: status ? status.id : undefined,
        }
        dispatch(setOrderFilter(params))
        dispatch(getOrders(params))
    }

    const clearFilter = () => {
        setCar({} as ICar)
        setCity({} as ICity)
        setStatus({} as IOrderStatus)
        dispatch(resetOrderFilter())
        dispatch(getOrders({ page: 1, limit: 4 }))
    }

    useEffect(() => {
        dispatch(getOrderStatuses())
        dispatch(getCities())
        dispatch(getAllCars())
    }, [])

    return (
        <div className={cl.filters}>
            <div className={cl.filters_container}>
                <SelectFilter
                    name="cars"
                    placeholder="Статус"
                    items={orderStatuses.data}
                    valueState={status?.name}
                    onChange={handleChange}
                />
                <SelectFilter
                    name="cars"
                    placeholder="Модель"
                    items={allCars.data}
                    valueState={car?.name}
                    onChange={handleChange}
                />
                <SelectFilter
                    name="city"
                    placeholder="Город"
                    items={cities.items.data}
                    valueState={city?.name}
                    onChange={handleChange}
                />
            </div>
            <div className={cl.filters_btns}>
                <Button
                    type="button"
                    title="Сбросить"
                    className={cl.btn_reset}
                    onClick={clearFilter}
                />
                <Button
                    type="button"
                    title="Применить"
                    className={cl.btn}
                    onClick={showFilterOrders}
                />
            </div>
        </div>
    )
}

export default OrderTabHeader
