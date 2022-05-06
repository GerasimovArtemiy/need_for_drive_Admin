import { useAppSelector } from './redux-hooks'

interface IErrorPage {
    isError: boolean
    errorTitle: string
}

export const useErrorPage = () => {
    const { carErrors } = useAppSelector((state) => state.cars)
    const { cityErrors } = useAppSelector((state) => state.city)
    const { orderErrors } = useAppSelector((state) => state.order)
    const { ratesErrors } = useAppSelector((state) => state.rate)

    const getErrorTitle = (): string => {
        if (carErrors.errorMessage !== '') return carErrors.errorMessage
        if (cityErrors.errorMessage !== '') return cityErrors.errorMessage
        if (orderErrors.errorMessage !== '') return orderErrors.errorMessage
        if (ratesErrors.errorMessage !== '') return ratesErrors.errorMessage
        return ''
    }
    const getErrorPage = (): IErrorPage => {
        if (carErrors.isError || cityErrors.isError || orderErrors.isError || ratesErrors.isError) {
            return { isError: true, errorTitle: getErrorTitle() }
        } else {
            return { isError: false, errorTitle: getErrorTitle() }
        }
    }

    const isError = getErrorPage()

    return isError
}
