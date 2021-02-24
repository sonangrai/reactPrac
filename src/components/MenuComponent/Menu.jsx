import React from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="nav">
      <li className="nav-link" key="1">
        <Link to={"#!"}>
          <i class="bi bi-heart"></i>
        </Link>
      </li>
      <li className="nav-link" key="2">
        <Link to={"#!"}>
          <i class="bi bi-heart"></i>
        </Link>
      </li>
      <li className="nav-link" key="3">
        <Link to={"#!"}>
          <i class="bi bi-heart"></i>
        </Link>
      </li>
    </nav>
  );
};

export default Menu;



