import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

import styles from "./ProductList.module.css";

const ProductList = (props) => {
  const [addedProduct, setAddedProduct] = useState();

  const addToCartHandler = (product) => {
    setAddedProduct(product);
  };

  useEffect(() => {
    addedProduct && props.onAddToCart(addedProduct);
  }, [addedProduct]);

  return (
    <div className={styles.productListField}>
      {props.products.length > 0 ? (
        props.products.map((prod) => (
          <Product
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            description={prod.description}
            onCart={false}
            onAddToCart={addToCartHandler}
          />
        ))
      ) : (
        <h1>No products found.</h1>
      )}
    </div>
  );
};

export default ProductList;
