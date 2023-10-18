import React from "react";
import { BsSearch, BsJustify } from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-content">
        <div className="header-left">
          <p>"Hello Shahrukh 👋,</p>
        </div>
        <div className="header-right">
          <BsSearch className="icon" />
          <input placeholder="Search here" />
        </div>
      </div>
    </header>
  );
}

export default Header;
