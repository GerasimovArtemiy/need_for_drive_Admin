import React, { useEffect } from 'react'
import { getAllRates } from '../../../store/Slices/RateSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import cl from './RateTab.module.scss'
import RateItem from './RateItem/RateItem'
import MyLoader from '../../Loader/MyLoader'

const RateTab: React.FC = () => {
    const dispatch = useAppDispatch()
    const { allRates, status } = useAppSelector((state) => state.rate)

    useEffect(() => {
        dispatch(getAllRates())
    }, [])
    return (
        <section className={cl.rateTab}>
            <h2 className={cl.rateTab_title}>Города</h2>
            <div className={cl.rateTab_container}>
                <AdminTabsHeaders />
                {status === 'resolved' ? (
                    allRates.map((rate) => <RateItem key={rate.id} rate={rate} />)
                ) : (
                    <MyLoader />
                )}
            </div>
        </section>
    )
}

export default RateTab
