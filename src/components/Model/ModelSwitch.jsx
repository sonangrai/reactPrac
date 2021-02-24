import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import LightBox from "../LightBox";

const ModelSwitch = () => {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/lbox/:vid" component={LightBox} />
      </Switch>
      {background && <Route path="/img/:id" component={LightBox} />}
    </>
  );
};

export default ModelSwitch;
