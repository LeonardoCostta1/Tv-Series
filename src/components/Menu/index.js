import React, { useEffect, useState } from "react";
// import Search from "../Search";

import "./style.css";

function Menu({ textLogo}) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={`menu_wrapper ${scroll ? "active" : ""}`}>
      <div className="menu_container">
        <div className="logo_container">
          <div className="brand">
            <span>s</span>
          </div>
          {textLogo}
        </div>
        <div className="search_menu_container">{/* <Search/> */}</div>
      </div>
    </div>
  );
}

export default Menu;
