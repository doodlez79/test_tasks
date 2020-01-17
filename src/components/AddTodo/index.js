import React, { useState } from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";
import styles from "./styles.module.scss";

const AddTodo = ({ addTodo, error, getTodosFunction }) => {
  const [data, setData] = useState({ username: "", email: "", text: "" });
  const handlerInputName = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      username: event.target.value
    }));
  };
  const handlerInputEmail = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      email: event.target.value
    }));
  };
  const handlerInputText = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      text: event.target.value
    }));
  };
  const validation = () => {
    if (
      data.email.length > 0 &&
      data.text.length > 0 &&
      data.username.length > 0
    ) {
      return false;
    }
    return true;
  };
  const submitTodo = () => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("text", data.text);
    addTodo(formData).then(data => {
      if (data.status === "ok") {
        setData({
          text: "",
          email: "",
          username: ""
        });
        getTodosFunction()
      }
    });
  };

  return (
    <Form className={styles.container}>
      <legend>Добавить задачу</legend>
      <Input
        value={data.username}
        placeholder="UserName"
        onChange={handlerInputName}
      />
      {error ? <span className={styles.error}>{error.message.email}</span> : ""}
      <Input
        value={data.email}
        placeholder="Email"
        type={"email"}
        onChange={handlerInputEmail}
      />
      <Textarea
        value={data.text}
        placeholder="Text"
        onChange={handlerInputText}
      />
      <Button
        disabled={validation()}
        type={"button"}
        color="primary"
        onClick={submitTodo}
      >
        Отправить
      </Button>
    </Form>
  );
};

export default AddTodo;
