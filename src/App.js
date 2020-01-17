import React from "react";
import { connect } from "react-redux";
import { getTodos } from "./ducks/todoList/getTodos";
import Workspace from "./container/Workspace";
import styles from "./styles.module.scss";
import { addTodo } from "./ducks/todoList/addTodo";
import { singIn } from "./ducks/auth/singIn";
import { changeTodo } from "./ducks/todoList/changeTodo";
import {singOut} from "./ducks/auth/singOut";

const App = ({
  addTodoFunc,
  getTodosFunction,
  todos,
  singInFunc,
  auth,
  todoError,
  authError,
  changeTodoFunc,
  tokenAuth,
  loading,
               logout
}) => {
  return (
    <div className={styles.container}>
      <Workspace
        getTodosFunction={getTodosFunction}
        singInFunc={singInFunc}
        addTodo={addTodoFunc}
        todos={todos}
        authState={auth}
        todoError={todoError}
        authError={authError}
        changeTodoFunc={changeTodoFunc}
        tokenAuth={tokenAuth}
        loading={loading}
        logout={logout}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todoList.listTodo,
    todoError: state.todoList.error,
    authError: state.auth.error,
    auth: state.auth,
    tokenAuth: state.auth.token,
    loading: state.todoList.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodosFunction: (page, sort, direction) => dispatch(getTodos(page, sort, direction)),
    addTodoFunc: data => dispatch(addTodo(data)),
    singInFunc: data => dispatch(singIn(data)),
    changeTodoFunc: (id, data) => dispatch(changeTodo(id, data)),
    logout: (token) => dispatch(singOut(token))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
