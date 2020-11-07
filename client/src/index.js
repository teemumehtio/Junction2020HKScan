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
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/this-week">This week</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/friends">Friends</NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/this-week">THIS WEEK</Route>
          <Route path="/history">HISTORY</Route>
          <Route path="/friends">FRIENDS</Route>
          <Redirect to="/this-week" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
