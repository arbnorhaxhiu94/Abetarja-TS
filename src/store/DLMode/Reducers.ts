import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "../../assets/Colors";

interface DLModeStateType {
    textColor: Colors
    backgroundColor: Colors
}

const initialState: DLModeStateType = {
    textColor: Colors.LIGHT_MODE_TEXT_COLOR,
    backgroundColor: Colors.LIGHT_MODE_BG_COLOR
};

export const DLModeSlice = createSlice({
    name: "DLMode",
    initialState: initialState,
    reducers: {
        setLightMode: (state) => {
            state.textColor = Colors.LIGHT_MODE_TEXT_COLOR;
            state.backgroundColor = Colors.LIGHT_MODE_BG_COLOR;
        },
        setDarkMode: (state) => {
            state.textColor = Colors.DARK_MODE_TEXT_COLOR;
            state.backgroundColor = Colors.DARK_MODE_BG_COLOR;
        }
    }
});

export default DLModeSlice.reducer;
export const {
    setLightMode,
    setDarkMode
} = DLModeSlice.actions;
