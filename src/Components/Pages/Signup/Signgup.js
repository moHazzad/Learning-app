import React from "react";

import Style from "./Signup.module.css";

import Form from "./Form";
import Illustration from "./Illustration";

const Signup = () => {
  return (
    <>
      <h1>Create an account </h1>
      <div className={Style.column}>
        <Illustration />
        <Form />
      </div>
    </>
  );
};

export default Signup;
