import "./assets/sass/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Header />
      </Router>
    </>
  );
}

export default App;
