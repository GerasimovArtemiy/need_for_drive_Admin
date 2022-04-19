import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import {
    getCategory,
    getCarsByParams,
    setCarFilter,
    resetCarFilter,
} from '../../../store/Slices/CarsSlice'
import { ISelectOption } from '../../Interfaces/SelectOptionInterface'
import { ICategory } from '../../Interfaces/CarInterface'
import { ICarParamsInterface } from '../../Interfaces/ParamsInterface'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
import Button from '../../UI/Buttons/Button'
import cl from '../OrderTabHeader/OrderTabHeader.module.scss'

const CarTabHeader: React.FC = () => {
    const [categories, setCategories] = useState<ICategory>({} as ICategory)
    const dispatch = useAppDispatch()
    const { category } = useAppSelector((state) => state.cars)

    const handleChange = (item: ISelectOption) => {
        const selectCategory = category.data.find((category) => category.name === item.value)!
        selectCategory && setCategories(selectCategory)
    }

    const showFiltredCars = (): void => {
        const params: ICarParamsInterface = {
            page: 1,
            limit: 5,
            categoryId: categories ? categories.id : undefined,
        }
        dispatch(setCarFilter(params))
        dispatch(getCarsByParams(params))
    }

    const clearFilter = (): void => {
        setCategories({} as ICategory)
        dispatch(resetCarFilter())
        dispatch(getCarsByParams({ page: 1, limit: 5 }))
    }
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return (
        <div className={cl.filters}>
            <div className={cl.filters_container}>
                <SelectFilter
                    name="category"
                    placeholder="Категории"
                    items={category.data}
                    valueState={categories?.name}
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
                    onClick={showFiltredCars}
                />
            </div>
        </div>
    )
}

export default CarTabHeader
