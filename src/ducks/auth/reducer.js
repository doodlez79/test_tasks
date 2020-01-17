import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from "./actions";

const initialState = {
    loading: false,
    token: '',
    auth: false,
    error: null
};
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case  LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case  LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                auth: true,
                loading: false,

            };
        case  LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case  LOGOUT_START:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case  LOGOUT_SUCCESS:
            return {
                ...state,
                loading: true,
                token: '',
                auth: false

            };
        case  LOGOUT_ERROR:
            return {
                ...state,
                loading: true,
                error: ""
            };
        default:
            return state
    }
}
