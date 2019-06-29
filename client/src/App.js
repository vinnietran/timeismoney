import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";
import Logo from '../../client/src/components/layout/MainLogo';

import TimeState from "./context/time/TimeState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Init Materialze JS
    M.AutoInit();
  });
  return (
    <AuthState>
      <TimeState>
        <AlertState>
          <Router>
            <body>
            <main>
              <Fragment>
                
                <Navbar />
                <div className="container">
                <Logo />
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin" component={Admin} />
                  </Switch>
                </div>
              </Fragment>
            </main>
            <footer>
              <Footer />
            </footer>
            </body>
          </Router>
        </AlertState>
      </TimeState>
    </AuthState>
  );
};

export default App;
