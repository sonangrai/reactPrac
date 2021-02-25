import React from 'react';
import {Switch, Route,useLocation} from "react-router-dom";
import Home from './Home';
import LightBoxModal from './LightBoxModal';

const ModelSwitch = () => {
    const location = useLocation();

  const background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" component={Home}/>
      </Switch>
      {background && <Route exact path="/lbox/:vid" component={LightBoxModal} />}
    </div>
  );
    
}

export default ModelSwitch
