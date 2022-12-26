import React from "react";

import image from "../../Assets/images/login.svg";
import Style from "../Signup/Illustration.module.css";

const LogIllustration = () => {
  return (
    <div className={Style.illustration}>
      <img src={image} alt="Login" />
    </div>
  );
};

export default LogIllustration;
