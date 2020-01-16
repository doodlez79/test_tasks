import { combineReducers } from 'redux'
import todoReducer from './todoList/index'
import authReducer from './auth'


export default combineReducers({
    todoList: todoReducer,
    auth: authReducer
})
