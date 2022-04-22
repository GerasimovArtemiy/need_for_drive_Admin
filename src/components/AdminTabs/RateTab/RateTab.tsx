import React, { useEffect } from 'react'
import { getAllRates } from '../../../store/Slices/RateSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import AdminTabsHeaders from '../../AdminTabsHeaders/AdminTabsHeaders'
import RateItem from './RateItem/RateItem'
import NoDataBlock from '../../NoDataBlock/NoDataBlock'
import MyLoader from '../../Loader/MyLoader'
import cl from './RateTab.module.scss'

const RateTab: React.FC = () => {
    const dispatch = useAppDispatch()
    const { allRates, status } = useAppSelector((state) => state.rate)

    useEffect(() => {
        dispatch(getAllRates())
    }, [])

    const showRates = () => {
        if (allRates.length) {
            return allRates.map((rate) => <RateItem key={rate.id} rate={rate} />)
        } else {
            return <NoDataBlock />
        }
    }

    return (
        <section className={cl.rateTab}>
            <h2 className={cl.rateTab_title}>Города</h2>
            <div className={cl.rateTab_container}>
                <AdminTabsHeaders />
                {status === 'resolved' ? showRates() : <MyLoader />}
            </div>
        </section>
    )
}

export default RateTab
