import React, {useEffect} from "react"
import {connect} from "react-redux";
import {getTodos} from "./ducks/todoList/getTodos";
import Preloader from "./components/Preloader";
// import userEvent from "@testing-library/user-event";


const App = (props) => {
    console.log(props)

    useEffect(() => {
        props.getTodosFunction("https://uxcandy.com/~shapoval/test-task-backend/v2?developer=pavel")
    }, [])
    return (
        <div>
            {
                props.loading
                ? (
                    <Preloader />
                    )
                    : <h1>Страница</h1>
            }

        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todoList.data,
        loading: state.todoList.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTodosFunction: (url) => dispatch(getTodos(url)),
        // ajaxDel: url => dispatch(ajaxDelTodo(url)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
