import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CityAndRateService from '../../API/cityAndRateService'
import { apiPath } from '../../API/apiPath'
import { ICity, ICitiesResponse, IPoint } from '../../components/Interfaces/CityInterface'
import { getError } from './ErrorSlice'

interface ICitiesState {
    cities: {
        items: { data: ICity[]; count: number }
        status: null | string
    }
    pointsById: {
        data: IPoint[]
        status: null | string
    }
}

const initialState: ICitiesState = {
    cities: {
        items: { data: [], count: 0 },
        status: null,
    },
    pointsById: {
        data: [],
        status: null,
    },
}

export const getCities = createAsyncThunk('city/getCities', async (_, { dispatch }) => {
    try {
        const response = await CityAndRateService.getEntities(apiPath.cities)
        return response.data
    } catch (err: any) {
        dispatch(
            getError({ name: `${err.name}: Загрузка городов`, message: err.message, isError: true })
        )
    }
})
export const postCity = createAsyncThunk('rate/addCity', async (city: string, { dispatch }) => {
    try {
        await CityAndRateService.postCity(city)
    } catch (err: any) {
        dispatch(
            getError({
                name: `${err.name}: Добавление города`,
                message: err.message,
                isError: true,
            })
        )
    }
})
export const deleteCityById = createAsyncThunk(
    'rate/deleteCityById',
    async (cityId: string, { dispatch }) => {
        try {
            await CityAndRateService.deleteEntity(apiPath.cities, cityId)
        } catch (err: any) {
            dispatch(
                getError({
                    name: `${err.name}: Удаление города`,
                    message: err.message,
                    isError: true,
                })
            )
        }
    }
)
export const getPointsById = createAsyncThunk(
    'rate/getPointsById',
    async (cityId: string | undefined, { dispatch }) => {
        try {
            const response = await CityAndRateService.getPointsById(cityId)
            return response.data.data
        } catch (err: any) {
            dispatch(
                getError({
                    name: `${err.name}: Загрузка адресов`,
                    message: err.message,
                    isError: true,
                })
            )
        }
    }
)

const CitySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        resetCities(state) {
            return { ...state, ...initialState }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCities.pending, (state) => {
            state.cities.status = 'loading'
        })
        builder.addCase(getCities.fulfilled, (state, action: PayloadAction<ICitiesResponse>) => {
            if (action.payload) {
                state.cities.items = action.payload
                state.cities.status = 'resolved'
            } else {
                state.cities.status = 'rejected'
            }
        })
        builder.addCase(getCities.rejected, (state) => {
            state.cities.status = 'rejected'
        })

        // =======================================================

        builder.addCase(getPointsById.pending, (state) => {
            state.pointsById.status = 'loading'
        })
        builder.addCase(getPointsById.fulfilled, (state, action: PayloadAction<IPoint[]>) => {
            if (action.payload) {
                state.pointsById.data = action.payload
                state.pointsById.status = 'resolved'
            } else {
                state.pointsById.status = 'rejected'
            }
        })
        builder.addCase(getPointsById.rejected, (state) => {
            state.cities.status = 'rejected'
        })
    },
})

export default CitySlice.reducer
