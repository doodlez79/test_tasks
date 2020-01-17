import { LOGOUT_ERROR, LOGOUT_SUCCESS, LOGOUT_START} from "./actions";
import { APIService } from "../../services/index";

export function singOut(token) {
    return async dispatch => {
        dispatch(Start());
        dispatch(Success());
        alert("Вы успешно вышли!")
    };
}
export function Start() {
    return {
        type: LOGOUT_START,
        loading: true
    };
}

export function Success() {
    return {
        type: LOGOUT_SUCCESS,
        loading: false,
    };
}
