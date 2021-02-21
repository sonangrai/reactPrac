import React, { Fragment, useState, useEffect } from "react";

const CardOverlay = ({ height }) => {
  console.log(height);
  const [ht, setht] = useState(height);
  const showOff = () => {
    if (ht === "0") {
      setht("100%");
    } else {
      setht("0");
    }
  };

  useEffect(() => {
    setht(height);
  }, [height]);

  return (
    <Fragment>
      <div className="card__overlay" style={{ height: `${ht}` }}>
        <div className="closur">
          <i
            className="bi bi-chevron-compact-down"
            onClick={(e) => showOff()}
          ></i>
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
