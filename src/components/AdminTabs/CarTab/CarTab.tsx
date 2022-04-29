import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { setCarCurrentPage, getCarsByParams, resetCarFilter } from '../../../store/Slices/CarsSlice'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import MyLoader from '../../Loader/MyLoader'
import NoDataBlock from '../../NoDataBlock/NoDataBlock'
import Pagination from '../../Pagination/Pagination'
import CarItem from './CarItem/CarItem'
import cl from './CarTab.module.scss'

const CarTab: React.FC = () => {
    const limit = 4
    const dispatch = useAppDispatch()
    const { carsByParams } = useAppSelector((state) => state.cars)
    const { filter } = useAppSelector((state) => state.cars)

    const changePage = (page: number) => {
        dispatch(setCarCurrentPage(page))
    }

    useEffect(() => {
        dispatch(getCarsByParams({ ...filter.params, page: filter.currentPage, limit: limit }))
    }, [filter.currentPage])

    useEffect(() => {
        return () => {
            dispatch(resetCarFilter())
        }
    }, [])

    const showCars = () => {
        if (carsByParams.items.data.length) {
            return carsByParams.items.data.map((car) => <CarItem key={car.id} car={car} />)
        } else {
            return <NoDataBlock />
        }
    }

    return (
        <section className={cl.carTab}>
            <h2 className={cl.carTab_title}>Автомобили</h2>
            <div className={cl.carTab_container}>
                <AdminTabsHeaders />
                {carsByParams.status === 'resolved' ? showCars() : <MyLoader />}
                <Pagination
                    className={cl.paginationSection}
                    currentPage={filter.currentPage}
                    totalCount={carsByParams.items.count}
                    pageSize={limit}
                    onPageChange={changePage}
                    siblingCount={1}
                />
            </div>
        </section>
    )
}

export default CarTab
