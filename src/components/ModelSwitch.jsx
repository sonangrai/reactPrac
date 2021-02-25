import React from 'react';
import {Switch, Route,useLocation} from "react-router-dom";
import Home from './Home';
import LightBoxModal from './LightBoxModal';
import LightBox from './LightBoxModal';

const ModelSwitch = () => {
    const location = useLocation();

  const background = location.state && location.state.background;
  console.log("Location : ",location);
  console.log("background : ",background);

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/" component={Home}/>
        <Route path="/lbox/:vid" component={LightBox} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/lbox/:vid" component={LightBoxModal} />}
    </div>
  );
    
}

export default ModelSwitch
