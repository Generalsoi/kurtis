import React, { useState } from "react";
import kurtisLogo from "../images/kurtis-logo.png";
import hamburger from "../images/hamburger.png";
import "../css/navbar.css";
import Button from "../common/button";

const NavBar = () => {
  const handleMouseEnter = (e) => {
    e.target.style.background = "#FFC43B";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "#3A5AFF";
  };

  const handleLogInMouseEnter = (e) => {
    e.target.style.background = "#FFC43B";
    e.target.style.color = "#fff";
  };

  const handleLogInMouseLeave = (e) => {
    e.target.style.background = "#FFFFFF";
    e.target.style.color = "#979797";
  };

  const handleSignUp = () => {
    console.log("Signed up");
  };

  const handleLogIn = () => {
    console.log("Logged In");
  };

  const signUpStyle = {
    background: "#3A5AFF",
    color: "#fff",
    width: "110px",
    height: "44px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    fontFamily: "Montserrat",
    border: "none",
    boxShadow: "inset 0px -4px 1px rgba(0, 0, 0, 0.6)",
  };

  const logInStyle = {
    background: "#FFFFFF",
    color: "#979797",
    width: "110px",
    height: "44px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
  };

  return (
    <nav className="navbar">
      <img src={kurtisLogo} alt="kurtis logo" />
      <ul className="navbar-nav">
        <li className="navbar-item">
          <p>EN</p>
        </li>
        <li className="navbar-item">
          <Button
            content="Sign Up"
            handleClick={() => handleSignUp()}
            buttonStyle={signUpStyle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </li>
        <li className="navbar-item">
          <Button
            content="Log In"
            handleClick={() => handleLogIn()}
            buttonStyle={logInStyle}
            handleMouseEnter={handleLogInMouseEnter}
            handleMouseLeave={handleLogInMouseLeave}
          />
        </li>
        <li className="navbar-item">
          <img src={hamburger} alt="hamburger-menu" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
