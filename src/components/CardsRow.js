import React, { Fragment } from "react";

const CardsRow = () => {
  return (
    <Fragment>
      <div className="cards__row">
        <div className="card">
          <h2>Episodes</h2>
          <h3>
            <span>
              Season 1 <i className="bi bi-chevron-compact-down"></i>
            </span>
          </h3>
          <div className="item">
            <h2>The vanishing boys</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardsRow;
