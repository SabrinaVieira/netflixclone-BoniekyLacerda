import React from "react";
import "./Header.css";

export default function Header({ dark }) {
  return (
    <header className={dark ? "dark" : ""}>
      <div className="header__logo">
        <a href="/">
          <img src="../netflix_logo.png" alt="logo" />
        </a>
      </div>
      <div className="header__user">
        <a href="/">
          <img alt="avatar" src="../avatar.png" />
        </a>
      </div>
    </header>
  );
}
