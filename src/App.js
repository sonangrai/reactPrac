import "./assets/sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import ModelSwitch from "./components/ModelSwitch";
import HeadSwitch from "./components/HeadSwitch";

function App() {
  return (
    <>
      <Router>
        <ModelSwitch />
        <HeadSwitch />
        <Header />
      </Router>
    </>
  );
}

export default App;
