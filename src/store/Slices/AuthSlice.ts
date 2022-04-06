import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../API/authService'
import { IUser, IUserResponseApi } from '../../components/Interfaces/UserInterfaces'

interface IUserValues {
    username: string
    password: string
}
interface IAuthState {
    status: null | string
    user: IUser
    loading: boolean
    error: string
}

const initialState: IAuthState = {
    status: null,
    user: {} as IUser,
    loading: false,
    error: '',
}

export const login = createAsyncThunk('auth/login', async ({ username, password }: IUserValues) => {
    const { data }: IUserResponseApi = await authService.login(username, password)
    if (data) localStorage.setItem('accessToken', data.access_token)
    return data
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state) {
            state.status = 'resolved'
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.error = ''
            state.status = 'loading'
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload) {
                state.error = ''
                state.status = 'resolved'
                state.user = action.payload
                state.loading = false
            } else {
                state.error = ''
                state.status = 'rejected'
                state.loading = false
                state.error = 'Упс! Что то пошло не так :('
            }
        })
        builder.addCase(login.rejected, (state) => {
            state.status = 'rejected'
            state.user = {} as IUser
            state.loading = false
            state.error = 'Неверный Логин или Пароль!'
        })
    },
})

export const { setLogin } = AuthSlice.actions
export default AuthSlice.reducer