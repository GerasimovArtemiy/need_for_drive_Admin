import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Slices/AuthSlice'
import ModalReducer from './Slices/ModalSlice'
import CarReducer from './Slices/CarsSlice'
import OrderReducer from './Slices/OrderSlice'
import CityReducer from './Slices/CitySlice'
import RateReducer from './Slices/RateSlice'
import ErrorReducer from './Slices/ErrorSlice'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        modal: ModalReducer,
        cars: CarReducer,
        order: OrderReducer,
        city: CityReducer,
        rate: RateReducer,
        error: ErrorReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
