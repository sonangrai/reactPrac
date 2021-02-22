import "./assets/sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import LightBox from "./components/LightBox";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lbox/:vid" component={LightBox} />
        </Switch>
        <Header />
      </Router>
    </>
  );
}

export default App;
