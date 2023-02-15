import React from "react";

import './style.css';

function Logo({textLogo}) {
  return (
    <div className="logo_container">
      <div className="brand">
        <span>s</span>
      </div>
      {textLogo}
    </div>
  );
}

export default Logo;
