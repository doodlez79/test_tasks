import React, { useEffect, useState } from "react";
import TodoItem from "../../components/TodoItem";
import AddTodo from "../../components/AddTodo";
import Button from "muicss/lib/react/button";
import styles from "./styles.module.scss";
import ModalWindow from "../../components/ModalWindow/index";
import AuthForm from "../../components/AuthForm";
import PaginationComponent from "../../components/Pagination";
import Preloader from "../../components/Preloader";
import SortBy from "../../components/SortBy";

const Workspace = ({
  todos,
  addTodo,
  singInFunc,
  getTodosFunction,
  authState,
  authError,
  changeTodoFunc,
  todoError,
  tokenAuth,
  logout
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sortParam, setSortParam] = useState("");
  const [pageParam, setPageParam] = useState("");
  const [directionParam, setDirectionParam] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };
  const logoutFunc = () => {
    logout();
  };

  useEffect(() => {
    getTodosFunction(pageParam, sortParam, directionParam);
  }, [pageParam, sortParam, directionParam]);
  const sortPageFunc = (paramPage, paramSort, direction) => {
    if (paramPage) {
      setPageParam(() => paramPage);
    }
    if (paramSort) {
      setSortParam(paramSort);
    }
    if (direction) {
      setDirectionParam(direction);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <AddTodo
        getTodosFunction={getTodosFunction}
        error={todoError}
        addTodo={addTodo}
      />
      <Button
        className={styles.login}
        variant="fab"
        color="accent"
        size="large"
        onClick={authState.auth ? logoutFunc : openModal}
      >
        {authState.auth ? "Logout" : "Login"}
      </Button>
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <AuthForm
          error={authError}
          singInFunc={singInFunc}
          closeModal={closeModal}
        />
      </ModalWindow>
      <div className={styles.todos}>
        {!todos.tasks ? (
          <Preloader />
        ) : (
          <>
            <SortBy sortPageFunc={sortPageFunc} />
            {todos.tasks.map(item => (
              <TodoItem
                tokenAuth={tokenAuth}
                id={item.id}
                changeTodo={changeTodoFunc}
                auth={authState.auth}
                key={item.id}
                text={item.text}
                name={item.username}
                email={item.email}
                status={item.status}
              />
            ))}
            <PaginationComponent
              sortPageFunc={sortPageFunc}
              length={todos.total_task_count ? todos.total_task_count : ""}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Workspace;
