import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CityAndRateService from '../../API/cityAndRateService'
import { apiPath } from '../../API/apiPath'
import { ICity, ICitiesResponse, IPoint } from '../../components/Interfaces/CityInterface'

interface ICitiesState {
    cities: {
        items: { data: ICity[]; count: number }
        status: null | string
    }
    pointsById: {
        data: IPoint[]
        status: null | string
    }
    cityErrors: {
        isError: boolean
        errorMessage: string
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
    cityErrors: {
        isError: false,
        errorMessage: '',
    },
}

export const getCities = createAsyncThunk('city/getCities', async () => {
    const response = await CityAndRateService.getEntities(apiPath.cities)
    return response.data
})
export const postCity = createAsyncThunk('rate/addCity', async (city: string) => {
    await CityAndRateService.postCity(city)
})
export const deleteCityById = createAsyncThunk('rate/deleteCityById', async (cityId: string) => {
    await CityAndRateService.deleteEntity(apiPath.cities, cityId)
})
export const getPointsById = createAsyncThunk(
    'rate/getPointsById',
    async (cityId: string | undefined) => {
        const response = await CityAndRateService.getPointsById(cityId)
        return response.data.data
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
            state.cityErrors.isError = false
            state.cityErrors = initialState.cityErrors
        })
        builder.addCase(getCities.fulfilled, (state, action: PayloadAction<ICitiesResponse>) => {
            if (action.payload) {
                state.cities.items = action.payload
                state.cities.status = 'resolved'
            } else {
                state.cities.status = 'rejected'
                state.cityErrors.isError = true
                state.cityErrors.errorMessage = 'Не удалось загрузить города'
            }
        })
        builder.addCase(getCities.rejected, (state) => {
            state.cities.status = 'rejected'
            state.cityErrors.isError = true
            state.cityErrors.errorMessage = 'Не удалось загрузить города'
        })

        // =======================================================

        builder.addCase(getPointsById.pending, (state) => {
            state.pointsById.status = 'loading'
            state.cityErrors.isError = false
            state.cityErrors = initialState.cityErrors
        })
        builder.addCase(getPointsById.fulfilled, (state, action: PayloadAction<IPoint[]>) => {
            if (action.payload) {
                state.pointsById.data = action.payload
                state.pointsById.status = 'resolved'
            } else {
                state.pointsById.status = 'rejected'
                state.cityErrors.isError = true
                state.cityErrors.errorMessage = 'Не удалось загрузить aдреса'
            }
        })
        builder.addCase(getPointsById.rejected, (state) => {
            state.cities.status = 'rejected'
            state.cityErrors.isError = true
            state.cityErrors.errorMessage = 'Не удалось загрузить aдреса'
        })
    },
})

export default CitySlice.reducer
