import {
  TODO_CHANGE_ERROR,
  TODO_CHANGE_START,
  TODO_CHANGE_SUCCESS,
  TODO_GET_ERROR,
  TODO_GET_START,
  TODO_GET_SUCCESS,
  TODO_ADD_ERROR,
  TODO_ADD_START,
  TODO_ADD_SUCCESS
} from "./actions";

const initialState = {
  loading: false,
  listTodo: [],
  error: null
};

export default function todoGetReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_GET_START:
      return {
        ...state,
        loading: true
      };
    case TODO_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        listTodo: action.data
      };
    case TODO_GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case TODO_CHANGE_START:
      return {
        ...state,
        loading: true
      };
    case TODO_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case TODO_CHANGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case TODO_ADD_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case TODO_ADD_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case TODO_ADD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
