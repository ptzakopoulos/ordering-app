import React from "react";

import classes from "./Cart.module.css";

import CartProducts from "./CartProducts";

const Cart = () => {
  const temporal = false;

  return (
    <div className={classes.cart}>
      <h1>Your cart</h1>
      <p className={classes.productNumber}>0</p>
      {temporal && <CartProducts />}
    </div>
  );
};

export default Cart;
