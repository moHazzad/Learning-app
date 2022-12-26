import React from "react";

import Style from "../Signup/Form.module.css";
import NewStyle from "./LogForm.module.css";

const LogForm = () => {
  return (
    <form className={` ${NewStyle.login} ${Style.form}`} action="#">
      <div className={Style.textInput}>
        <input type="text" placeholder="Enter email" />
        <span> alternate_email </span>
      </div>

      <div className={Style.textInput}>
        <input type="password" placeholder="Enter password" />
        <span> lock </span>
      </div>

      <button className={Style.button}>
        <span>Submit now</span>
      </button>

      <div className={Style.info}>
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </form>
  );

  //   class="material-icons-outlined"
  // class="material-icons-outlined"
};

export default LogForm;
