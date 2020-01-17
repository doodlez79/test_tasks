import { TODO_ADD_START, TODO_ADD_SUCCESS, TODO_ADD_ERROR } from "./actions";
import { APIService } from "../../services/index";

export function addTodo(data) {
  return async dispatch => {
    dispatch(Start());
    return await APIService.post("/create", data).then(data => {
      if (data.status === "ok") {
        dispatch(Success(data))
        alert("Задача успешно добавленна!")
      } else {
        dispatch(Error(data))
      }
      return data
    });
  };
}
export function Start() {
  return {
    type: TODO_ADD_START,
    loading: true,
    error: ""
  };
}

export function Success() {
  return {
    type: TODO_ADD_SUCCESS,
    loading: false,
  };
}
export function Error(error) {
  return {
    type: TODO_ADD_ERROR,
    error: error,
    loading: false
  };
}
