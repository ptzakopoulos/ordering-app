import React, { useState, useContext } from "react";

import classes from "./Cart.module.css";

import CartContext from "../../store/cart-context";
import CartProducts from "./CartProducts";

const Cart = (props) => {
  const temporal = false;
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes.cart}>
      <h1>Your cart</h1>
      <p className={classes.productNumber}>{numberOfCartItems}</p>
      {temporal && <CartProducts />}
    </div>
  );
};

export default Cart;
