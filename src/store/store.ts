import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Slices/AuthSlice'
import ModalReducer from './Slices/ModalSlice'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        modal: ModalReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
