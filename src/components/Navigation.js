import React from "react";
import classes from "./Navigation.module.scss";
import logo from "../assets/images/logo.svg";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <img src={logo} alt="Logo"></img>
      <h1>Mokomasis žaidimas</h1>
    </nav>
  );
};

export default Navigation;
