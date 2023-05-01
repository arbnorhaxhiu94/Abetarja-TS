import { createSlice } from "@reduxjs/toolkit"

interface BottomTabStateType {
    show: boolean
}

const initialState: BottomTabStateType = {
    show: true
}

export const BottomTabSlice = createSlice({
    name: "BottomTab",
    initialState: initialState,
    reducers: {
        show: (state) => {
            state.show = true;
        },
        hide: (state) => {
            state.show = false;
        }
    }
});

export default BottomTabSlice.reducer;
export const {
    show,
    hide
} = BottomTabSlice.actions;
