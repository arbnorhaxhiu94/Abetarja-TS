import { AppDispatch } from "../store";
import * as BottomTabReducer from "./Reducers";

class BottomTabActions {
    static toggleBottomTab = (show: boolean, dispatch: AppDispatch) => {
        if (show) dispatch(BottomTabReducer.show());
        else dispatch(BottomTabReducer.hide());
    }
}

export default BottomTabActions;