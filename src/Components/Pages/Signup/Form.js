import React from "react";

import Style from "./Form.module.css";

const Form = () => {
  return (
    <form className={` ${Style.signup} ${Style.form}`} action="#">
      <div className={Style.textInput}>
        <input type="text" placeholder="Enter name" />
        <span> person </span>
      </div>

      <div className={Style.textInput}>
        <input type="text" placeholder="Enter email" />
        <span> alternate_email </span>
      </div>

      <div className={Style.textInput}>
        <input type="password" placeholder="Enter password" />
        <span> lock </span>
      </div>

      <div className={Style.textInput}>
        <input type="password" placeholder="Confirm password" />
        <span> lock_clock </span>
      </div>

      <label>
        <input type="checkbox" />
        <span> I agree to the Terms & Conditions</span>
      </label>

      <div className={Style.button}>
        <span>Submit now</span>
      </div>

      <div className={Style.info}>
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </form>

    // class="material-icons-outlined"
    // class="material-icons-outlined"
    // class="material-icons-outlined"
    // class="material-icons-outlined"
  );
};

export default Form;
