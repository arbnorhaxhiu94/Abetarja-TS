import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";

export type UserStateType = {
    loading: boolean,
    user: User | null,
    error: string
}

const initialState: UserStateType = {
    loading: false,
    user: null,
    error: ""
}

export const UserSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        setIsLoading: (state) => {
            state.loading = true;
        },
        signUpSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearState: (state) => {
            state.loading = false;
            state.error = "";
        }
    }
});

export default UserSlice.reducer;
export const {
    setIsLoading,
    signUpSuccess,
    setError,
    clearState
} = UserSlice.actions;
