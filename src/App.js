import React, { Fragment } from "react";

//Styling
import "./App.css";

//Local Modules
import Header from "./Components/Header";
import WelcomingMessage from "./Components/WelcomingMessage";
import Login from "./Components/Login";

function App() {
  const isLogedIn = false;
  return (
    <>
      {!isLogedIn ? (
        <Login />
      ) : (
        <>
          <Header />
          <WelcomingMessage />
        </>
      )}
    </>
  );
}

export default App;
