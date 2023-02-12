import React from "react";
import Search from "../Search";

import "./style.css";

function Menu({textLogo,user}) {
  return (
    <div className="menu_wrapper">
      <div className="menu_container">
        <div className="logo_container">{textLogo}</div>
        <div className="search_menu_container">
            <Search/>
        </div>
        <div className="user_menu_container">leonardo costa</div>
      </div>
    </div>
  );
}

export default Menu;
