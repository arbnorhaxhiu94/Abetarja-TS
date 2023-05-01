import { AppDispatch } from "../store";
import * as DLModeReducer from "./Reducers";

class DLModeActions {
    static setDLMode = (mode: "LIGHT" | "DARK", dispatch: AppDispatch) => {
        if (mode === "LIGHT") dispatch(DLModeReducer.setLightMode());
        else dispatch(DLModeReducer.setDarkMode());
    }
}

export default DLModeActions;
