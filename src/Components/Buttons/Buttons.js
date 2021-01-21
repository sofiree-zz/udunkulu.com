import React, { useState } from "react";
import './Buttons.css';

const Button = (props) => {
  
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
 
  return (
    <button className={`btn-${variant} btn-${size}`} >{props.children}</button>
  );
}
export {Button};