import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IModalState {
    isDropMenuProfile: boolean
}

const initialState: IModalState = {
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
