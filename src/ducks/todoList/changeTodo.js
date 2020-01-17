import {
  TODO_CHANGE_ERROR,
  TODO_CHANGE_START,
  TODO_CHANGE_SUCCESS
} from "./actions";

import { APIService } from "../../services/index";

export function changeTodo(id, data) {
  return async dispatch => {
    dispatch(Start());
    return await APIService.post(`/edit/${id}`, data)
      .then(res => {
        dispatch(Success(id, data));
        return res;
      })
      .catch(error => {
        console.warn(error);
      });
  };
}
export function Start() {
  return {
    type: TODO_CHANGE_START,
    loading: true
  };
}

export function Success(id, data) {
  return {
    type: TODO_CHANGE_SUCCESS,
    loading: false,
    data: data,
    id: id
  };
}
export function Error(error) {
  return {
    type: TODO_CHANGE_ERROR,
    error: error,
    loading: false
  };
}
