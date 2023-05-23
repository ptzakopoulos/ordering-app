import React, { Fragment, useEffect, useState } from "react";

//Styling
import "./App.css";

//Local Modules
import Header from "./Components/Header";
import WelcomingMessage from "./Components/WelcomingMessage";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import CartProvider from "./store/CartProvider";

function App() {
  const [productsToCart, setProductsToCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [products, setProducts] = useState([
    {
      id: Math.random(),
      name: "Product Name",
      price: 12,
      description: "This is the product's description",
      quantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
    {
      id: Math.random(),
      name: "Kebab",
      price: 8,
      description: "Kebab is a kebab that likes kebab",
      wuantity: 1,
    },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("shop");

  //Handling login
  const onLoginHandler = (isValid) => {
    setIsLoggedIn(isValid);
  };

  //Handling Logout
  const onLogoutHandler = (loggedOut) => {
    setIsLoggedIn(loggedOut);
  };

  //Handling Products in the cart aftter adding one

  const cartProducts = (product) => {
    const currentProducts = [...productsToCart];

    const index = currentProducts.findIndex((e) => {
      return e.id === product.id;
    });

    if (index >= 0) {
      currentProducts[index].quantity += product.quantity;
    } else {
      currentProducts.push(product);
    }

    setProductsToCart([...currentProducts]);
    setTotalQuantity((prev) => {
      return prev + product.quantity;
    });
  };

  return (
    <CartProvider>
      {!isLoggedIn ? (
        <Login onLogin={onLoginHandler} />
      ) : (
        <>
          <Header cartQuantity={totalQuantity} onLogout={onLogoutHandler} />
          {page === "shop" && (
            <>
              <WelcomingMessage />
              <ProductList products={products} onAddToCart={cartProducts} />
            </>
          )}
        </>
      )}
    </CartProvider>
  );
}

export default App;
