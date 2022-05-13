import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IError {
    name: string
    message: any
    isError: boolean
}
interface IErrorState {
    error: IError
}

const initialState: IErrorState = {
    error: {
        name: '',
        message: '',
        isError: false,
    },
}

const ErrorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        getError(state, action: PayloadAction<IError>) {
            state.error.name = action.payload.name
            state.error.message = action.payload.message
            state.error.isError = action.payload.isError
        },
        resetError(state) {
            state.error = { ...initialState.error }
        },
    },
})

export const { getError, resetError } = ErrorSlice.actions
export default ErrorSlice.reducer
