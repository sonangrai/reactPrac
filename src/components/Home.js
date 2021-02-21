import React, { Fragment } from "react";
import CardsRow from "./CardsRow";
import TransCard from "./TransCard";

const Home = () => {
  return (
    <Fragment>
      <div className="parent__box">
        <div className="left__part">
          <TransCard />
        </div>
        <div className="right__part">
          <CardsRow />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
