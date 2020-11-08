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
import History from "./History";
import Friends from "./Friends";

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
              className="d-inline-block align-middle"
              style={{ marginRight: "35px" }}
            />
            <img
              alt="Let's Eat Ethical!"
              src="/eat-ethical.png"
              className="d-inline-block align-middle"
              style={{ marginRight: "35px" }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/plan">Plan your meal</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/friends">Friends</NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/plan">
            <EatingPlan />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Redirect to="/plan" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
