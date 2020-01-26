import React, { Component } from "react";
import "./Login";
import "./App.css";
import Login from "./Login";
import Sign from "./Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forgot from "./Forgot";
import Home from "./Home";
import Settings from "./Settings";
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
