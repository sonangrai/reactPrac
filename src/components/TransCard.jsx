import React, { Fragment } from "react";

const TransCard = () => {
  return (
    <Fragment>
      <h2 className="title">Movie Name</h2>
      <div className="small__card">
        <div className="poster">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1611787640592-ebf78080d96e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </figure>
        </div>
        <div className="ratings">
          <span className="imdb">IMDB 4.2</span>
          <span className="pg">18+</span>
        </div>
      </div>
      <div className="detail__sec">
        <h3>
          <span>
            Season 1 <i className="bi bi-chevron-compact-down"></i>
          </span>
        </h3>
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
      <div className="detail__sec">
        <h3>
          <span>Cast</span>
        </h3>
        <div className="cast__avat">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png"
            alt=""
          />
        </div>
      </div>
      <div className="detail__sec">
        <h3>Creators</h3>
      </div>
    </Fragment>
  );
};

export default TransCard;
