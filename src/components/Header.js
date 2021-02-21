import React from "react";
import Menu from "./MenuComponent/Menu";

const Header = () => {
  return (
    <header className="header">
      <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
      <Menu />
    </header>
  );
};

export default Header;
