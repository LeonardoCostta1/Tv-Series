import React from "react";
import "./style.css";

function Button({title }) {
  return (
    <div className="button_wrapper">
      <div className="title_button">{title}</div>
    </div>
  );
}

export default Button;
