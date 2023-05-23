import React, { useEffect, useReducer } from "react";

import styles from "./Login.module.css";

import Input from "./Reusables/Input";

const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME_ISVALID":
      return {
        ...state,
        userNameValue: action.val,
        userNameIsValid: action.val.length > 5,
      };
    case "PASSWORD_ISVALID":
      return {
        ...state,
        passwordValue: action.val,
        passwordIsValid: action.val.length > 5,
      };
    case "FORM_ISVALID":
      return {
        ...state,
        formIsValid: state.userNameIsValid && state.passwordIsValid,
      };
    default:
      return {
        userNameValue: "",
        userNameIsValid: false,
        passwordValue: "",
        passwordIsValid: false,
        formIsValid: false,
      };
  }
};

const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    userNameValue: "",
    userNameIsValid: false,
    passwordValue: "",
    passwordIsValid: false,
    formIsValid: false,
  });

  const userNameChangeHandler = (value) => {
    dispatch({ type: "USERNAME_ISVALID", val: value });
  };

  const passwordChangeHandler = (value) => {
    dispatch({ type: "PASSWORD_ISVALID", val: value });
  };

  useEffect(() => {
    console.log("Validation check.");
    dispatch({ type: "FORM_ISVALID" });
  }, [state.userNameIsValid, state.passwordIsValid]);

  const onClickHandler = (e) => {
    e.preventDefault();
    props.onLogin(state.formIsValid);
  };

  return (
    <div className={styles.formField}>
      <form>
        <Input
          onChange={userNameChangeHandler}
          type={"text"}
          label={"Username"}
          value={state.userNameValue}
        />
        <Input
          onChange={passwordChangeHandler}
          type={"password"}
          label={"Password"}
          value={state.passwordValue}
        />
        <button
          className={`${styles.loginButton} ${
            state.formIsValid && styles.enabled
          }`}
          type="submit"
          name="loginbt"
          onClick={onClickHandler}
          disabled={!state.formIsValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
