import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CityAndRateService from '../../API/cityAndRateService'
import { IRate } from '../../components/Interfaces/RateInterface'

interface IRateState {
    allRates: IRate[]
    status: null | string
}

const initialState: IRateState = {
    allRates: [],
    status: null,
}

export const getAllRates = createAsyncThunk('rate/getAllRates', async () => {
    const response = await CityAndRateService.getRates()
    return response.data.data
})
export const deleteRateById = createAsyncThunk('rate/deleteRateById', async (rateId: string) => {
    await CityAndRateService.deleteRate(rateId)
})

const RateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        resetRates(state) {
            return { ...state, ...initialState }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllRates.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getAllRates.fulfilled, (state, action: PayloadAction<IRate[]>) => {
            if (action.payload) {
                state.allRates = action.payload
                state.status = 'resolved'
            } else {
                state.status = 'rejected'
            }
        })
        builder.addCase(getAllRates.rejected, (state) => {
            state.status = 'rejected'
        })

        // =======================================================
    },
})

export default RateSlice.reducer
