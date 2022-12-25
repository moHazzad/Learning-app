import React from "react";
import Nav from "../Nav/Nav";

import "../App.css";
import Signup from "../Pages/Signup/Signgup";
import Style from "./Style.module.css";

const Layout = () => {
  return (
    <>
      <Nav />

      <main className={Style.main}>
        <div className={Style.container}>
          {/* <Home /> */}
          <Signup />
        </div>
      </main>
    </>
  );
};

export default Layout;
