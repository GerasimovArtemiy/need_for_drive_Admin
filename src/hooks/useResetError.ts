import { resetOrderError } from '../store/Slices/OrderSlice'
import { resetCarError } from '../store/Slices/CarsSlice'
import { resetCityError } from '../store/Slices/CitySlice'
import { resetRateError } from '../store/Slices/RateSlice'
import { useAppDispatch, useAppSelector } from './redux-hooks'

export const useResetError = () => {
    const { carErrors } = useAppSelector((state) => state.cars)
    const { cityErrors } = useAppSelector((state) => state.city)
    const { orderErrors } = useAppSelector((state) => state.order)
    const { ratesErrors } = useAppSelector((state) => state.rate)
    const dispatch = useAppDispatch()

    const getError = () => {
        if (carErrors.isError) dispatch(resetCarError())
        if (orderErrors.isError) dispatch(resetOrderError())
        if (cityErrors.isError) dispatch(resetCityError())
        if (ratesErrors.isError) dispatch(resetRateError())
    }
    return getError
}
