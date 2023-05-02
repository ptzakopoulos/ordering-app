import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputField}>
      <label>{props.label}</label>
      <input
        className={styles.loginInput}
        type={props.type}
        placeholder={props.label}
        name={props.label}
      />
    </div>
  );
};

export default Input;
