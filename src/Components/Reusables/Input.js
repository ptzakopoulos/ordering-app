import React, { useImperativeHandle, useRef } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    return inputRef.current.value;
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  const onChangeHandler = (e) => {
    props.onChange(e.target.value);
    console.log(inputRef.current.type);
  };

  const isNumber = props.type === "number";

  return (
    <div className={styles.inputField}>
      {!isNumber && <label>{props.label}</label>}
      <input
        ref={inputRef}
        className={`${styles.loginInput} ${isNumber && styles.isNumber}`}
        type={props.type}
        placeholder={props.label}
        name={props.label}
        onChange={onChangeHandler}
        value={props.value}
      />
    </div>
  );
});

export default Input;
