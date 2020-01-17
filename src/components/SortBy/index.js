import React, { useState } from "react";
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import styles from "./styles.module.scss";

const objItem = ["id", "username", "email", "status"];

const SortBy = ({sortPageFunc}) => {
  const sortHandler = event => {
    event.persist();
    sortPageFunc( "", event.target.value, "")
  };
  const sortHandlerDirection = event => {
    event.persist();
    sortPageFunc( "","", event.target.value)
  };

  return (
    <div className={styles.container}>
      <span>Сортировать по: </span>
      {objItem.map(item => (
        <label htmlFor={item} className={styles.label}>
          <input
            type="radio"
            id={item}
            name={"sortBy"}
            value={item}
            onChange={sortHandler}
          />
          <span>{item}</span>
        </label>
      ))}

      <Select name="input" useDefault={true} defaultValue="Направление" onChange={sortHandlerDirection}>
        <Option value="asc" label="Возрастанию" />
        <Option value="desc" label="Убыванию" />
      </Select>
    </div>
  );
};

export default SortBy;
