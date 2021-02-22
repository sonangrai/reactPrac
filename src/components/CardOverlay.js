import React, { Fragment, useState } from "react";

const CardOverlay = () => {
  const [dir, setdir] = useState("up");
  const showOff = (e) => {
    e.currentTarget.classList.toggle("active");
    if (dir === "up") {
      setdir("down");
    } else {
      setdir("up");
    }
  };

  return (
    <Fragment>
      <div className="card__overlay" onClick={(e) => showOff(e)}>
        <div className="closur">
          <i className={`bi bi-chevron-compact-${dir}`}></i>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Fragment>
  );
};

export default CardOverlay;
