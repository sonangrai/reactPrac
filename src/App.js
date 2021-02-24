import "./assets/sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap-icons/font/bootstrap-icons.css";

import Add from "./pages/Add";
import Download from "./pages/Download";
import Share from "./pages/Share";
import Header from "./components/Header";
import ModelSwitch from "./components/Model/ModelSwitch";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <ModelSwitch />
          <Route exact path="/add/:vid" component={Add} />
          <Route exact path="/download/:vid" component={Download} />
          <Route exact path="/share/:vid" component={Share} />
        </Switch>
        <Header />
      </Router>
    </>
  );
}

export default App;
