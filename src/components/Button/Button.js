import React from "react";
import "./Button.css";

const Button = ({ children, classes }) => {
  return <button className={`btn ${classes}`}>{children}</button>;
};

export default Button;
