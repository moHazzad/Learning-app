import * as React from "react";
import Account from "./Account";

import Logo from "./logo-bg.png";
import Style from "./Style.module.css";

function Nav() {
  return (
    <nav className={Style.nav}>
      <ul>
        <li>
          <a href="index.html" className={Style.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn Codding</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;
