import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CityAndRateService from '../../API/cityAndRateService'
import { apiPath } from '../../API/apiPath'
import { IRate, INewRate } from '../../components/Interfaces/RateInterface'

interface IRateState {
    allRates: IRate[]
    status: null | string
    ratesErrors: {
        isError: boolean
        errorMessage: string
    }
}

const initialState: IRateState = {
    allRates: [],
    status: null,
    ratesErrors: {
        isError: false,
        errorMessage: '',
    },
}

export const getAllRates = createAsyncThunk('rate/getAllRates', async () => {
    const response = await CityAndRateService.getEntities(apiPath.rate)
    return response.data.data
})
export const postRate = createAsyncThunk('rate/postRate', async (rate: INewRate) => {
    await CityAndRateService.postRateType({ name: rate.name, unit: rate.unit })
    const rateType = await CityAndRateService.getRateTypeByName(rate.name)
    const rateTypeId = await rateType.data.data[0].id
    await CityAndRateService.postRate({
        price: +rate.price,
        rateTypeId: { id: rateTypeId, name: rate.name, unit: rate.unit },
    })
})
export const deleteRateById = createAsyncThunk('rate/deleteRateById', async (rateId: string) => {
    await CityAndRateService.deleteEntity(apiPath.rate, rateId)
})
export const deleteRateTypeById = createAsyncThunk(
    'rate/deleteRateTypeById',
    async (rateType: string) => {
        await CityAndRateService.deleteEntity(apiPath.rateType, rateType)
    }
)
export const getRateType = createAsyncThunk('rate/getRateType', async () => {
    await CityAndRateService.getEntities(apiPath.rateType)
})

const RateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        resetRates(state) {
            return { ...state, ...initialState }
        },
        resetRateError(state) {
            state.ratesErrors.isError = false
            state.ratesErrors.errorMessage = ''
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllRates.pending, (state) => {
            state.status = 'loading'
            state.ratesErrors.isError = false
            state.ratesErrors = initialState.ratesErrors
        })
        builder.addCase(getAllRates.fulfilled, (state, action: PayloadAction<IRate[]>) => {
            if (action.payload) {
                state.allRates = action.payload
                state.status = 'resolved'
            } else {
                state.status = 'rejected'
                state.ratesErrors.isError = true
                state.ratesErrors.errorMessage = 'Не удалось загрузить тарифы'
            }
        })
        builder.addCase(getAllRates.rejected, (state) => {
            state.status = 'rejected'
        })

        // =======================================================

        builder.addCase(postRate.pending, (state) => {
            state.ratesErrors.isError = false
            state.ratesErrors = initialState.ratesErrors
        })
        builder.addCase(postRate.fulfilled, (state) => {
            state.ratesErrors.isError = false
            state.ratesErrors = initialState.ratesErrors
        })
        builder.addCase(postRate.rejected, (state) => {
            state.ratesErrors.isError = true
            state.ratesErrors.errorMessage = 'Не удалось добавить тариф'
        })
    },
})
export const { resetRateError } = RateSlice.actions
export default RateSlice.reducer
