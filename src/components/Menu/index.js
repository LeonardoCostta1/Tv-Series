import React from "react";
// import Search from "../Search";

import "./style.css";

function Menu({textLogo,user}) {
  return (
    <div className="menu_wrapper">
      <div className="menu_container">
        <div className="logo_container"><div className="brand"><span>s</span></div>{textLogo}</div>
        <div className="search_menu_container">
            {/* <Search/> */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
