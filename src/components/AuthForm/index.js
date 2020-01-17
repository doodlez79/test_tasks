import React, { useState } from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import styles from "./styles.module.scss"

const AuthForm = ({ singInFunc, closeModal, error }) => {
  const [data, setData] = useState({ username: "", password: "" });
  const handlerInputLogin = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      username: event.target.value
    }));
  };
  const handlerInputPassword = event => {
    event.persist();
    setData(prevState => ({
      ...prevState,
      password: event.target.value
    }));
  };
  const submitForm = () => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    singInFunc(formData).then(data => {
        if (data.status === "ok") {
            alert("Авторизация прошла успешно!")
            closeModal()
        }
    });
  };
  return (
    <Form className={styles.container}>
      <legend>Регистрация</legend>
        {error ? <span className={styles.error}>{error.password}</span> : ""}
      <Input placeholder="Логин" onChange={handlerInputLogin} />
      <Input
        onChange={handlerInputPassword}
        type={"password"}
        placeholder="Пароль"
      />
      <Button type={"button"} onClick={submitForm} variant="raised">
        Войти
      </Button>
    </Form>
  );
};

export default AuthForm;
