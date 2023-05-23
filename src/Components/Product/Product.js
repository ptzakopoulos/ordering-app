import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../store/cart-context";
import Input from "../Reusables/Input";

import styles from "./Product.module.css";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const price = quantity * props.price;
    setCurrentPrice(price);
  }, [quantity]);

  const onChangeHandler = (quantity) => {
    setQuantity(+quantity);
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => prev > 1 && prev - 1);
  };

  const onAddToCartHangler = () => {
    if (quantity > 0) {
      props.onAddToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: quantity,
        totalPrice: currentPrice,
      });
    }
    setQuantity(1);
    // cartCtx.addItem({
    //   id: props.id,
    //   name: props.name,
    //   amout: amount,
    //   price: props.price,
    // });
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.prodInfo}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
        {props.onCart && <h3 className={styles.prodQuantity}>{quantity}</h3>}
        {!props.onCart && <h3 className={styles.prodPrice}>{props.price}</h3>}
      </div>
      <div className={styles.productHandler}>
        <h3 className={styles.currentPrice}>{currentPrice} €</h3>
        <div className={styles.inputField}>
          <button className={styles.valueButton} onClick={decrement}>
            -
          </button>
          <Input
            label={"Quantity"}
            type={"number"}
            name={"quantity"}
            onChange={onChangeHandler}
            value={quantity}
          />
          <button className={styles.valueButton} onClick={increment}>
            +
          </button>
        </div>
        {!props.onCart && (
          <button className={styles.addToCart} onClick={onAddToCartHangler}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
