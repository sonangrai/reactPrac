import React, { Fragment } from "react";
import CardsRow from "./CardsRow";
import TransCard from "./TransCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LightBox from "./LightBox";

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
      <Router>
        <Switch>
          <Route path="/lbox/:vid" component={LightBox} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Home;
