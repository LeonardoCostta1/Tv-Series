import React from "react";
import "./style.css";

function Button({onClick, title}) {
  return (
    <button className="button_wrapper" onClick={onClick}>
      <div className="title_button">{title}</div>
    </button>
  );
}

export default Button;
