import React from "react";

import Style from "./Account.module.css";

const Account = () => {
  return (
    <div className={Style.account}>
      <span title="Account">account_circle</span>
      <a href="signup.html">Signup</a>
      {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
};

export default Account;
