import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CarService from '../../API/carService'
import { ICar, ICarsResponse, ICategory } from '../../components/Interfaces/CarInterface'
import { ICarParamsInterface } from '../../components/Interfaces/ParamsInterface'

interface ICarState {
    category: {
        data: ICategory[]
        status: string | null
    }
    allCars: {
        data: ICar[]
        status: string | null
    }
    carsByParams: {
        items: ICarsResponse
        status: string | null
    }
    filter: {
        params: ICarParamsInterface
        currentPage: number
    }
}

const initialState: ICarState = {
    category: {
        data: [],
        status: null,
    },
    allCars: {
        data: [],
        status: null,
    },
    carsByParams: {
        items: {
            data: [],
            count: 0,
            fields: {},
        },
        status: null,
    },
    filter: {
        params: {} as ICarParamsInterface,
        currentPage: 1,
    },
}

export const getCategory = createAsyncThunk('cars/getCategory', async () => {
    const response = await CarService.getCategories()
    return response.data.data
})
export const getAllCars = createAsyncThunk('cars/getAllCars', async () => {
    const response = await CarService.getCars()
    return response.data.data
})
export const getCarsByParams = createAsyncThunk(
    'cars/getCarsByParams',
    async (params: ICarParamsInterface) => {
        const response = await CarService.getCarsByParams(params)
        return response.data
    }
)
export const deleteCar = createAsyncThunk('rate/deleteCar', async (carId: string) => {
    await CarService.deleteCar(carId)
})

const CarsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCarFilter(state, action: PayloadAction<ICarParamsInterface>) {
            state.filter.params = action.payload
        },
        resetCarFilter(state) {
            state.filter = initialState.filter
        },
        setCarCurrentPage(state, action: PayloadAction<number>) {
            state.filter.currentPage = action.payload
        },
        resetCars(state) {
            return { ...state, ...initialState }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state) => {
            state.category.status = 'loading'
        })
        builder.addCase(getCategory.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
            if (action.payload) {
                state.category.data = action.payload
                state.category.status = 'resolved'
            } else {
                state.category.status = 'rejected'
            }
        })
        builder.addCase(getCategory.rejected, (state) => {
            state.category.status = 'rejected'
        })

        // =======================================================

        builder.addCase(getAllCars.pending, (state) => {
            state.allCars.status = 'loading'
        })
        builder.addCase(getAllCars.fulfilled, (state, action: PayloadAction<ICar[]>) => {
            if (action.payload) {
                state.allCars.data = action.payload
                state.allCars.status = 'resolved'
            } else {
                state.allCars.status = 'rejected'
            }
        })
        builder.addCase(getAllCars.rejected, (state) => {
            state.allCars.status = 'rejected'
        })

        // =======================================================

        builder.addCase(getCarsByParams.pending, (state) => {
            state.carsByParams.status = 'loading'
        })
        builder.addCase(
            getCarsByParams.fulfilled,
            (state, action: PayloadAction<ICarsResponse>) => {
                if (action.payload) {
                    state.carsByParams.items = action.payload
                    state.carsByParams.status = 'resolved'
                } else {
                    state.carsByParams.status = 'rejected'
                }
            }
        )
        builder.addCase(getCarsByParams.rejected, (state) => {
            state.carsByParams.status = 'rejected'
        })
    },
})
export const { setCarFilter, resetCarFilter, setCarCurrentPage } = CarsSlice.actions
export default CarsSlice.reducer
