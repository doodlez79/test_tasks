import {
    TODO_CHANGE_ERROR,
    TODO_CHANGE_START,  TODO_CHANGE_SUCCESS,
    TODO_DELETE_ERROR,
    TODO_DELETE_START,  TODO_DELETE_SUCCESS,
    TODO_GET_ERROR,
    TODO_GET_START,
    TODO_GET_SUCCESS,  TODO_POST_ERROR,  TODO_POST_START,  TODO_POST_SUCCESS
} from "./actions";

const initialState = {
    loading: false,
    data: [],
    error: null
};


export default function todoGetReducer(state = initialState, action) {
    switch (action.type) {
        case  TODO_GET_START:
            return {
                ...state,
                loading: true
            };
        case  TODO_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case  TODO_GET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case  TODO_DELETE_START:
            return {
                ...state,
                loading: true
            };
        case  TODO_DELETE_SUCCESS:
            return {
                ...state,
                delStatus: true,
                data:  state.data.filter(({url}) => url !== action.delElem.url),
                loading: action.loading,
                error: action.error
            };
        case  TODO_DELETE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case  TODO_CHANGE_START:
            return {
                ...state,
                loading: true
            };
        case  TODO_CHANGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case  TODO_CHANGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case  TODO_POST_START:
            return {
                ...state,
                loading: true
            };
        case  TODO_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case  TODO_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
