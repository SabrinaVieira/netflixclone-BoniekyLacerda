import React from "react";
import "./Header.css";

export default function Header({ dark }) {
  return (
    <header className={dark ? dark : ""}>
      <div className="header__logo">
        <a href="/">
          <img
            src="https://upload.wikimedia/commons/0/0f/Logo_Netflix.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="header__user">
        <a href="/">
          <img src="https://pbs/twimg.com/profile/1240119990411550720/hBEe3dn_400x400p.png" />
        </a>
      </div>
    </header>
  );
}
