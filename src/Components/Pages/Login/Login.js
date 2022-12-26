import React from "react";

import Style from "../../Pages/Signup/Signup.module.css";
import LogForm from "./LogForm";
import LogIllustration from "./LogIllustration";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={Style.column}>
        <LogIllustration />
        <LogForm />
      </div>
    </>
  );
};

export default Login;
