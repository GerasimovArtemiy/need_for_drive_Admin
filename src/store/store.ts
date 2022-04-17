import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Slices/AuthSlice'
import ModalReducer from './Slices/ModalSlice'
import CarReducer from './Slices/CarsSlice'
import OrderReducer from './Slices/OrderSlice'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        modal: ModalReducer,
        cars: CarReducer,
        order: OrderReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
