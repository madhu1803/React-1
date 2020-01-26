import React, { Component } from "react";
import "./Login";
import "./App.css";
import Login from "./Login";
import Sign from "./Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login" style={{ color: "black" }}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ color: "black" }}>
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Sign />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
