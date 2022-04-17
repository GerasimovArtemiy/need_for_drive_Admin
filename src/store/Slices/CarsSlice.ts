import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CarService from '../../API/carService'
import { ICar, ICategory } from '../../components/Interfaces/CarInterface'

interface ICarState {
    category: {
        data: ICategory[]
        status: string | null
    }
    allCars: {
        data: ICar[]
        status: string | null
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
}

export const getCategory = createAsyncThunk('cars/getCategory', async () => {
    const response = await CarService.getCategories()
    return response.data.data
})
export const getAllCars = createAsyncThunk('cars/getAllCars', async () => {
    const response = await CarService.getCars()
    return response.data.data
})

const CarsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
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
    },
})

export default CarsSlice.reducer
