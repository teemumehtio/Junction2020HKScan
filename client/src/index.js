import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import EatingPlan from "./EatingPlan";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar>
          <Navbar.Brand>
            <img
              alt="HKScan"
              src="/logo192.png"
              className="d-inline-block align-top"
              style={{ marginRight: "15px" }}
            />
            Let's eat ethical!
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/plan">Plan your eating</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/friends">Friends</NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/plan">
            <EatingPlan />
          </Route>
          <Route path="/history">HISTORY</Route>
          <Route path="/friends">FRIENDS</Route>
          <Redirect to="/plan" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
