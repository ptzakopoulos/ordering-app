import React from "react";
//Styling
import styles from "./Header.module.css";
//Local Components
import Cart from "./Cart/Cart";

const Header = (props) => {
  const onLogOutHandler = () => {
    props.onLogout(false);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>React Ordering App</h1>
      <div className={styles.options}>
        <Cart totalQuantity={props.cartQuantity} />
        <button
          className={styles.logout}
          onClick={onLogOutHandler}
          type="button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
