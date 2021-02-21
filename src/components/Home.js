import React, { Fragment } from "react";
import TransCard from "./TransCard";

const Home = () => {
  return (
    <Fragment>
      <div className="parent__box">
        <div className="left__part">
          <TransCard />
        </div>
        <div className="right__part">Slider Here</div>
      </div>
    </Fragment>
  );
};

export default Home;
