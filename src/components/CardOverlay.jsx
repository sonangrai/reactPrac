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
        <div className="playlist__row">
          <div className="playlist__item active">
            <div className="lf">
              <img
                src="https://img.youtube.com/vi/ow3fhDtRHiU/sddefault.jpg"
                alt=""
              />
            </div>
            <div className="rf">
              <h3>Mortal Kombat</h3>
              <p>Lorem Ipsum Siod Idos</p>
            </div>
          </div>
          <div className="playlist__item">
            <div className="lf">
              <img
                src="https://img.youtube.com/vi/ow3fhDtRHiU/sddefault.jpg"
                alt=""
              />
            </div>
            <div className="rf">
              <h3>Mortal Kombat</h3>
              <p>Lorem Ipsum Siod Idos</p>
            </div>
          </div>
          <div className="playlist__item">
            <div className="lf">
              <img
                src="https://img.youtube.com/vi/ow3fhDtRHiU/sddefault.jpg"
                alt=""
              />
            </div>
            <div className="rf">
              <h3>Mortal Kombat</h3>
              <p>Lorem Ipsum Siod Idos</p>
            </div>
          </div>
          <div className="playlist__item">
            <div className="lf">
              <img
                src="https://img.youtube.com/vi/ow3fhDtRHiU/sddefault.jpg"
                alt=""
              />
            </div>
            <div className="rf">
              <h3>Mortal Kombat</h3>
              <p>Lorem Ipsum Siod Idos</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardOverlay;
