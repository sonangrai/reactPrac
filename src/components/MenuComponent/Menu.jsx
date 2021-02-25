import React from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const menuLink = [
    {
      link: "/",
      icon: "bi-heart",
      vid: "",
    },
    {
      link: "/add",
      icon: "bi-plus",
      vid: "101",
    },
    {
      link: "/download",
      icon: "bi-download",
      vid: "c55",
    },
    {
      link: "/share",
      icon: "bi-box-arrow-up",
      vid: "c67",
    },
  ];

  return (
    <nav className="nav">
      {menuLink.map((link, index) => {
        let actualLink = link.link + (link.vid && "/" + link.vid);

        return (
          <li className="nav-link" key={index}>
            <Link to={actualLink}>
              <i className={"bi " + link.icon}></i>
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Menu;
