import React from "react";
import image from "../../Assets/images/signup.svg";
import Style from "./Illustration.module.css";

const Illustration = () => {
  return (
    <div className={Style.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
