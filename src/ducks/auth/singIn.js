import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from "./actions";
import { APIService } from "../../services/index";

export function singIn(data) {
  return async dispatch => {
    dispatch(Start());
    return await APIService.post("/login", data).then(data => {
      if (data.status === "ok") {
        dispatch(Success(data.message));
      } else {
        dispatch(Error(data.message));
      }
      return data;
    });
  };
}
export function Start() {
  return {
    type: LOGIN_START,
    loading: true
  };
}

export function Success(data) {
  return {
    type: LOGIN_SUCCESS,
    loading: false,
    token: data.token
  };
}
export function Error(error) {
  return {
    type: LOGIN_ERROR,
    error: error,
    loading: false
  };
}
