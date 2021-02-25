import React from "react";


import Menu from "./MenuComponent/Menu";
import Back from "./MenuComponent/Back";

const Header = () => {
  return (
    <header>
      <Back />
      <Menu />
    </header>
  );
};

export default Header;
