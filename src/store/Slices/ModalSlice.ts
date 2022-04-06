import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
    isDropMenuProfile: boolean
}

const initialState: IState = {
    isDropMenuProfile: false,
}

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setDropMenuProfile(state, action: PayloadAction<boolean>) {
            state.isDropMenuProfile = action.payload
        },
    },
})

export const { setDropMenuProfile } = ModalSlice.actions
export default ModalSlice.reducer
