import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CityService from '../../API/cityService'
import { ICity, ICitiesResponse } from '../../components/Interfaces/CityInterface'

interface ICitiesState {
    cities: {
        items: { data: ICity[]; count: number }
        status: null | string
    }
}

const initialState: ICitiesState = {
    cities: {
        items: { data: [], count: 0 },
        status: null,
    },
}

export const getCities = createAsyncThunk('city/getCities', async () => {
    const response = await CityService.getCity()
    return response.data
})

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
    },
})

export default CitySlice.reducer
