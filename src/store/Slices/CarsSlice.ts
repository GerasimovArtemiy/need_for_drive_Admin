import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CarService from '../../API/carService'
import { ICar, ICarsResponse, ICategory, INewCar } from '../../components/Interfaces/CarInterface'
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
    carById: {
        selectCar: ICar
        status: null | string
    }
    putCar: {
        status: string | null
        data: INewCar
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
    carById: {
        selectCar: {} as ICar,
        status: null,
    },
    putCar: {
        status: null,
        data: {} as INewCar,
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
export const getCarById = createAsyncThunk('cars/getCarById', async (carId: string | undefined) => {
    const response = await CarService.getCarById(carId)
    return response.data.data
})
export const deleteCar = createAsyncThunk('rate/deleteCar', async (carId: string) => {
    await CarService.deleteCar(carId)
})
export const putCar = createAsyncThunk(
    'cars/putCar',
    async (newCar: { carId: string; car: INewCar }) => {
        const response = await CarService.putCar(newCar)
        return response.data.data
    }
)
export const postCar = createAsyncThunk('cars/postCar', async (newCar: INewCar) => {
    const response = await CarService.postCar(newCar)
    console.log(response.data.data)
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
        resetCarById(state) {
            state.carById = initialState.carById
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

        // =======================================================

        builder.addCase(getCarById.pending, (state) => {
            state.carById.status = 'loading'
        })
        builder.addCase(getCarById.fulfilled, (state, action: PayloadAction<ICar>) => {
            if (action.payload) {
                state.carById.selectCar = action.payload
                state.carById.status = 'resolved'
            } else {
                state.carById.status = 'rejected'
            }
        })
        builder.addCase(getCarById.rejected, (state) => {
            state.carById.status = 'rejected'
        })

        // =======================================================

        builder.addCase(putCar.pending, (state) => {
            state.putCar.status = 'loading'
        })
        builder.addCase(putCar.fulfilled, (state, action: PayloadAction<INewCar>) => {
            if (action.payload) {
                state.putCar.data = action.payload
                state.putCar.status = 'resolved'
            } else {
                state.putCar.status = 'rejected'
            }
        })
        builder.addCase(putCar.rejected, (state) => {
            state.putCar.status = 'rejected'
        })
    },
})
export const { setCarFilter, resetCarFilter, setCarCurrentPage, resetCarById } = CarsSlice.actions
export default CarsSlice.reducer
