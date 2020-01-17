import {
    TODO_GET_ERROR,
    TODO_GET_START,
    TODO_GET_SUCCESS
} from "./actions";

import {APIService} from "../../services/index"

export function getTodos(page, sort, direction ) {
    console.log(page, sort)
    return  async dispatch => {
        dispatch(Start());
        return await APIService.get('',page, sort, direction )
            .then(data => {
               if (data.status === "ok") {
                   dispatch(Success(data.message));
               }
            })
    };
}
export function Start() {
    return {
        type:  TODO_GET_START,
        loading: true,
    }
}

export function Success(data) {
    return {
        type:  TODO_GET_SUCCESS,
        loading: false,
        data: data
    }
}
export function Error(error) {
    return {
        type:  TODO_GET_ERROR,
        error: error,
        loading: false
    }
}
