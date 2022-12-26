import React from "react";
import Nav from "../Nav/Nav";

import "../App.css";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signgup";
import Style from "./Style.module.css";

const Layout = () => {
  return (
    <>
      <Nav />

      <main className={Style.main}>
        <div className={Style.container}>
          <Home />
          <Signup />
          <Login />
        </div>
      </main>
    </>
  );
};

export default Layout;
