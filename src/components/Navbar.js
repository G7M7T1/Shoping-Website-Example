import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="firstLine">
        <div className="logo">
          <img src="./logo.png" className="logoImage" alt="Logo" />
        </div>
        <div className="searchbar">
          <input type="text" />
          <a href="/">
            <i className="fas fa-search"> </i>
          </a>
        </div>
        <div className="signOrRegister">
          <div className="signOrRegisterIcon">
            <i className="fas fa-user-friends"> </i>
          </div>
          <div className="signOrRegisterText">
            <p>Welcome</p>
            <h3>
              <a href="/">Sign In</a> / <a href="/">Register</a>
            </h3>
          </div>
        </div>
        <div className="shipingCard">
          <i className="fas fa-shopping-cart"> </i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
