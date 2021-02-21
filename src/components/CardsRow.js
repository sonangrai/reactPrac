import React, { Fragment, useState } from "react";
import CardOverlay from "./CardOverlay";

const CardsRow = () => {
  const [show, setshow] = useState(false);
  const [dir, setdir] = useState("down");
  const showOff = () => {
    setshow((show) => !show);

    if (dir === "up") {
      setdir("down");
    } else {
      setdir("up");
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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
              className={`bi bi-chevron-compact-${dir}`}
              name="1"
              onClick={(e) => showOff()}
            ></i>
          </div>
          {show ? <CardOverlay /> : <span></span>}
        </div>
        <div className="card">
          <h2>Episodes</h2>
          <h3>
            <span>
              Season 2 <i className="bi bi-chevron-compact-down"></i>
            </span>
          </h3>
          <div className="item">
            <h2>The vanishing girls</h2>

            <iframe
              title="Demo"
              src="https://www.youtube.com/embed/VqFn3FvVjk4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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
              className={`bi bi-chevron-compact-${dir}`}
              name="2"
              onClick={(e) => showOff()}
            ></i>
          </div>
          {show ? <CardOverlay /> : <span></span>}
        </div>
        <div className="card">
          <h2>Episodes</h2>
          <h3>
            <span>
              Season 2 <i className="bi bi-chevron-compact-down"></i>
            </span>
          </h3>
          <div className="item">
            <h2>The vanishing girls</h2>
            <iframe
              title="Demo"
              src="https://www.youtube.com/embed/VqFn3FvVjk4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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
              className={`bi bi-chevron-compact-${dir}`}
              name="3"
              onClick={(e) => showOff()}
            ></i>
          </div>
          {show ? <CardOverlay /> : <span></span>}
        </div>
      </div>
    </Fragment>
  );
};

export default CardsRow;
