import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import OrderService from '../../API/orderService'
import { IOrderStatus, IOrdersResponse } from '../../components/Interfaces/OrderInterface'
import { IOrderParamsInterface } from '../../components/Interfaces/OrderParamsInterface'

interface IOrderState {
    orders: {
        orderItems: IOrdersResponse
        status: string | null
    }
    orderStatuses: {
        data: IOrderStatus[]
        status: string | null
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

export default OrderSLice.reducer
