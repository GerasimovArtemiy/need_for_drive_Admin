import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CityAndRateService from '../../API/cityAndRateService'
import { apiPath } from '../../API/apiPath'
import { IRate, INewRate } from '../../components/Interfaces/RateInterface'
import { getError } from './ErrorSlice'

interface IRateState {
    allRates: IRate[]
    status: null | string
}

const initialState: IRateState = {
    allRates: [],
    status: null,
}

export const getAllRates = createAsyncThunk('rate/getAllRates', async (_, { dispatch }) => {
    try {
        const response = await CityAndRateService.getEntities(apiPath.rate)
        return response.data.data
    } catch (err: any) {
        dispatch(
            getError({ name: `${err.name}: Загрузка тарифов`, message: err.message, isError: true })
        )
    }
})
export const postRate = createAsyncThunk('rate/postRate', async (rate: INewRate, { dispatch }) => {
    try {
        await CityAndRateService.postRateType({ name: rate.name, unit: rate.unit })
        const rateType = await CityAndRateService.getRateTypeByName(rate.name)
        const rateTypeId = await rateType.data.data[0].id
        await CityAndRateService.postRate({
            price: +rate.price,
            rateTypeId: { id: rateTypeId, name: rate.name, unit: rate.unit },
        })
    } catch (err: any) {
        dispatch(
            getError({
                name: `${err.name}: Добавление тарифа`,
                message: err.message,
                isError: true,
            })
        )
    }
})
export const deleteRateById = createAsyncThunk(
    'rate/deleteRateById',
    async (rateId: string, { dispatch }) => {
        try {
            await CityAndRateService.deleteEntity(apiPath.rate, rateId)
        } catch (err: any) {
            dispatch(
                getError({
                    name: `${err.name}: Удаление тарифа`,
                    message: err.message,
                    isError: true,
                })
            )
        }
    }
)
export const deleteRateTypeById = createAsyncThunk(
    'rate/deleteRateTypeById',
    async (rateType: string, { dispatch }) => {
        try {
            await CityAndRateService.deleteEntity(apiPath.rateType, rateType)
        } catch (err: any) {
            dispatch(
                getError({
                    name: `${err.name}: Удаление тарифа`,
                    message: err.message,
                    isError: true,
                })
            )
        }
    }
)
export const getRateType = createAsyncThunk('rate/getRateType', async (_, { dispatch }) => {
    try {
        await CityAndRateService.getEntities(apiPath.rateType)
    } catch (err: any) {
        dispatch(
            getError({
                name: `${err.name}: Добавление тарифа`,
                message: err.message,
                isError: true,
            })
        )
    }
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
    },
})
export default RateSlice.reducer
