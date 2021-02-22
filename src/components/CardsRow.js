import React, { Fragment, useState } from "react";
import CardOverlay from "./CardOverlay";
import LightBox from "./LightBox";

const CardsRow = () => {
  const [play, setplay] = useState();

  const lightBox = (e) => {
    setplay(e.target.attributes[1].value);
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
            <div className="light__box">
              <img
                src="https://img.youtube.com/vi/VqFn3FvVjk4/sddefault.jpg"
                alt=""
              />
              <span
                className="bi bi-play-circle"
                data-value="VqFn3FvVjk4"
                onClick={(e) => lightBox(e)}
              ></span>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <CardOverlay />
        </div>
        <div className="card">
          <h2>Episodes</h2>
          <h3>
            <span>
              Season 1 <i className="bi bi-chevron-compact-down"></i>
            </span>
          </h3>
          <div className="item">
            <h2>Mortal Kombat</h2>
            <div className="light__box">
              <img
                src="https://img.youtube.com/vi/ow3fhDtRHiU/sddefault.jpg"
                alt=""
              />
              <i className="bi bi-play-circle"></i>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <CardOverlay />
        </div>
        <div className="card">
          <h2>Episodes</h2>
          <h3>
            <span>
              Season 1 <i className="bi bi-chevron-compact-down"></i>
            </span>
          </h3>
          <div className="item">
            <h2>Joker</h2>
            <div className="light__box">
              <img
                src="https://img.youtube.com/vi/zAGVQLHvwOY/sddefault.jpg"
                alt=""
              />
              <i className="bi bi-play-circle"></i>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <CardOverlay />
        </div>
      </div>
      {play && <LightBox link={play} />}
    </Fragment>
  );
};

export default CardsRow;
