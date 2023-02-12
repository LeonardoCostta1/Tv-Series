import React from "react";

import "./style.css";

function Cover({ backdrop }) {
  return (
    <div className="cover_container">
       <img src={backdrop} alt="backdrop" />
    </div>
  );
}

export default Cover;
