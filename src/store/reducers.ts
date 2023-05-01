import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DLModeSlice } from "./DLMode/Reducers";
import { UserSlice } from "./User/Reducers";
import { BottomTabSlice } from "./BottomTab/Reducers";

const DarkLightModePersistedReducer = persistReducer({
    key: 'DLMode',
    storage: AsyncStorage
}, DLModeSlice.reducer);

const UserPersistedReducer = persistReducer({
    key: 'User',
    storage: AsyncStorage,
    whitelist: ['user']
}, UserSlice.reducer);

const reducers = combineReducers({
    DLMode: DarkLightModePersistedReducer,
    User: UserPersistedReducer,
    BottomTab: BottomTabSlice.reducer
});

export default reducers;
