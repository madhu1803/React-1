import React, { Component } from "react";

import "./App.css";
import Login from "./Layouts/Components/Views/Login";
import Sign from "./Layouts/Components/Views/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forgot from "./Layouts/Components/Views/Forgot";
import Home from "./Layouts/Components/Views/Home";
import Settings from "./Layouts/Components/Views/Settings";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/signup">
              <Sign />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgot">
              <Forgot />
            </Route>
            <Route path="/home">
              <Home name="madhu" />
            </Route>
            <Route path="/settings">
              <Settings name="madhu" />
            </Route>
            <Route path="/logout">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
