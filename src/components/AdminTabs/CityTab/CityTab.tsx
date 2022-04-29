import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { getCities } from '../../../store/Slices/CitySlice'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import MyLoader from '../../Loader/MyLoader'
import CityItem from './CityItem/CityItem'
import NoDataBlock from '../../NoDataBlock/NoDataBlock'
import cl from './CityTab.module.scss'

const CityTab: React.FC = () => {
    const dispatch = useAppDispatch()
    const { cities } = useAppSelector((state) => state.city)

    useEffect(() => {
        dispatch(getCities())
    }, [])

    const showCities = () => {
        if (cities.items.data.length) {
            return cities.items.data.map((city) => <CityItem key={city.id} city={city} />)
        } else {
            return <NoDataBlock />
        }
    }

    return (
        <section className={cl.cityTab}>
            <h2 className={cl.cityTab_title}>Города</h2>
            <div className={cl.cityTab_container}>
                <AdminTabsHeaders />
                {cities.status === 'resolved' ? showCities() : <MyLoader />}
            </div>
        </section>
    )
}

export default CityTab
