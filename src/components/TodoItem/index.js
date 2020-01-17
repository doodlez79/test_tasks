import React, { useState } from "react";
import styles from "./styles.module.scss";
// import Input from "muicss/lib/react/input";

const TodoItem = ({
  name,
  email,
  text,
  status,
  auth,
  changeTodo,
  id,
  tokenAuth
}) => {
  const [change, setChange] = useState(false);
  const [newData, setData] = useState({
    text: text,
    status: status,
  });

  const onChangeText = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      text: event.target.value
    }));
  };
  const onChangeStatus = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      status: event.target.value
    }));
  };
  const saveData = () => {
    const formData = new FormData()
    formData.append("text", newData.text)
    formData.append("status", newData.status)
    formData.append("token", tokenAuth)
    changeTodo(id, formData).then(res=> {
      if (res.status === "ok") {
        setChange(!change);
      }
    })
  };
  return (
    <div className={styles.container}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      {change ? (
        <input value={newData.text} onChange={onChangeText} />
      ) : (
        <div>{text}</div>
      )}
      {change ? (
        <input value={newData.status} onChange={onChangeStatus} />
      ) : (
        <div>{status}</div>
      )}
      {change ? <button onClick={saveData}> Save </button> : ""}

      {auth ? (
        <div>
          <button onClick={() => setChange(!change)}>Ред.</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
