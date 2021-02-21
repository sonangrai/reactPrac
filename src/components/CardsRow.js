import React, { Fragment, useState } from "react";
import CardOverlay from "./CardOverlay";

const CardsRow = () => {
  const [height, setheight] = useState("0");
  const showOff = () => {
    if (height === "0") {
      setheight("100%");
    } else {
      setheight("0");
    }
  };

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
            <iframe
              title="Demo"
              src="https://www.youtube.com/embed/VqFn3FvVjk4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="upper">
            <i
              className="bi bi-chevron-compact-up"
              onClick={(e) => showOff()}
            ></i>
          </div>
          <CardOverlay height={height} />
        </div>
      </div>
    </Fragment>
  );
};

export default CardsRow;
