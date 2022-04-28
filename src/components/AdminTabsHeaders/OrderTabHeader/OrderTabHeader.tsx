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
import { orderFilters } from './constants'
import cl from './OrderTabHeader.module.scss'

interface IFilterState {
    car: ICar
    city: ICity
    status: IOrderStatus
    [index: string]: ICar | ICity | IOrderStatus
}
interface IMapState {
    car: ICar[]
    city: ICity[]
    status: IOrderStatus[]
    [index: string]: ICar[] | ICity[] | IOrderStatus[]
}

const OrderTabHeader: React.FC = () => {
    const [filter, setFilter] = useState<IFilterState>({
        car: {} as ICar,
        city: {} as ICity,
        status: {} as IOrderStatus,
    })

    const dispatch = useAppDispatch()
    const { allCars } = useAppSelector((state) => state.cars)
    const { cities } = useAppSelector((state) => state.city)
    const { orderStatuses } = useAppSelector((state) => state.order)

    const mapState: IMapState = {
        status: orderStatuses.data,
        car: allCars.data,
        city: cities.items.data,
    }

    const handleChange = (item: ISelectOption) => {
        const selectCar = allCars.data.find((car) => car.name === item.value)!
        const selectCity = cities.items.data.find((city) => city.name === item.value)!
        const selectStatus = orderStatuses.data.find((status) => status.name === item.value)!
        selectCar && setFilter({ ...filter, car: selectCar })
        selectCity && setFilter({ ...filter, city: selectCity })
        selectStatus && setFilter({ ...filter, status: selectStatus })
    }

    const showFilterOrders = (): void => {
        const params: IOrderParamsInterface = {
            page: 0,
            limit: 4,
            carId: filter.car ? filter.car.id : undefined,
            cityId: filter.city ? filter.city.id : undefined,
            orderStatusId: filter.status ? filter.status.id : undefined,
        }
        dispatch(setOrderFilter(params))
        dispatch(getOrders(params))
    }

    const clearFilter = () => {
        setFilter({
            car: {} as ICar,
            city: {} as ICity,
            status: {} as IOrderStatus,
        })
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
                {orderFilters.map(({ name, placeholder }) => (
                    <SelectFilter
                        key={name}
                        name={name}
                        placeholder={placeholder}
                        items={mapState[name]}
                        valueState={filter[name]?.name}
                        onChange={handleChange}
                    />
                ))}
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
