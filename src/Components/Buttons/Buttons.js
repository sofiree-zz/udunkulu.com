import React from "react";
import './Buttons.css';

const Button = ({ size, variant, children }) => {
  return (
    <button className={`btn btn-${variant}  btn-${size}`} id="button">{children}</button>
  );
}

export { Button };