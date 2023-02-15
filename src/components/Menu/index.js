import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import User from "../User";

import "./style.css";

function Menu() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={`menu_wrapper ${scroll ? "active" : ""}`}>
      <div className="menu_container">
        <Logo textLogo={"streamreel"} />
        <div className="search_menu_container"><User/></div>
      </div>
    </div>
  );
}

export default Menu;
