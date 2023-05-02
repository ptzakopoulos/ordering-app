import React from "react";

import styles from "./Login.module.css";

import Input from "./Reusables/Input";

const Login = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formField}>
      <form>
        <Input type={"text"} label={"Username"} />
        <Input type={"password"} label={"Password"} />
        <button
          className={styles.loginButton}
          type="submit"
          name="loginbt"
          onClick={onClickHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
