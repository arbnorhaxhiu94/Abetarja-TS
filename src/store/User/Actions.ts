import { AppDispatch } from "../store";
import * as UserReducers from "./Reducers";

class UserActions {
    static register = async(
        dispatch: AppDispatch
    ) => {
        dispatch(UserReducers.setIsLoading());
    }

    static clearState = (dispatch: AppDispatch) => {
        dispatch(UserReducers.clearState());
    }
}

export default UserActions;
