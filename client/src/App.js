import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import TimeState from "./context/time/TimeState";
import "./App.css";

const App = () => {
  return (
    <TimeState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          My App
        </Fragment>
      </Router>
    </TimeState>
  );
};

export default App;
