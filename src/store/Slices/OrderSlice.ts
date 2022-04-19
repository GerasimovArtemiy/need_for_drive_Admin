import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import OrderService from '../../API/orderService'
import { IOrderStatus, IOrdersResponse } from '../../components/Interfaces/OrderInterface'
import { IOrderParamsInterface } from '../../components/Interfaces/ParamsInterface'

interface IOrderState {
    orders: {
        orderItems: IOrdersResponse
        status: string | null
    }
    orderStatuses: {
        data: IOrderStatus[]
        status: string | null
    }
    filter: {
        params: IOrderParamsInterface
        currentPage: number
    }
}

const initialState: IOrderState = {
    orders: {
        status: null,
        orderItems: {
            count: 0,
            fields: {},
            data: [],
        },
    },
    orderStatuses: {
        status: null,
        data: [],
    },
    filter: {
        params: {} as IOrderParamsInterface,
        currentPage: 1,
    },
}

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async (params: IOrderParamsInterface) => {
        const response = await OrderService.getOrders(params)
        return response.data
    }
)
export const getOrderStatuses = createAsyncThunk('order/getOrderStatuses', async () => {
    const response = await OrderService.getOrderStatuses()
    return response.data.data
})

const OrderSLice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderFilter(state, action: PayloadAction<IOrderParamsInterface>) {
            state.filter.params = action.payload
        },
        resetOrderFilter(state) {
            state.filter = initialState.filter
        },
        setOrderCurrentPage(state, action: PayloadAction<number>) {
            state.filter.currentPage = action.payload
        },
        resetOrders(state) {
            return { ...state, ...initialState }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, (state) => {
            state.orders.status = 'loading'
        })
        builder.addCase(getOrders.fulfilled, (state, action: PayloadAction<IOrdersResponse>) => {
            if (action.payload) {
                state.orders.orderItems = action.payload
                state.orders.status = 'resolved'
            } else {
                state.orders.status = 'rejected'
            }
        })
        builder.addCase(getOrders.rejected, (state) => {
            state.orders.status = 'rejected'
        })

        // =======================================================

        builder.addCase(getOrderStatuses.pending, (state) => {
            state.orderStatuses.status = 'loading'
        })
        builder.addCase(
            getOrderStatuses.fulfilled,
            (state, action: PayloadAction<IOrderStatus[]>) => {
                if (action.payload) {
                    state.orderStatuses.data = action.payload
                    state.orderStatuses.status = 'resolved'
                } else {
                    state.orderStatuses.status = 'rejected'
                }
            }
        )
        builder.addCase(getOrderStatuses.rejected, (state) => {
            state.orderStatuses.status = 'rejected'
        })
    },
})
export const { setOrderCurrentPage, setOrderFilter, resetOrderFilter } = OrderSLice.actions
export default OrderSLice.reducer