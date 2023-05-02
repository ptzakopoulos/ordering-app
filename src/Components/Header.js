import React from "react";
//Styling
import styles from "./Header.module.css";
//Local Components
import Cart from "./Cart/Cart";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>React Ordering App</h1>
      <Cart />
    </div>
  );
};

export default Header;
