import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Slices/AuthSlice'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
