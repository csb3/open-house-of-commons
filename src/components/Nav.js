import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./nav.scss";

export default function Nav(props) {
  return (
    <Router forceRefresh={true}>
      <div className="nav">
        <div className="nav--left">
          <h2>
            <Link to="/">Open House of Commons</Link>
          </h2>
        </div>
        <div className="nav--right">
          <Link to="/">Home</Link>
          <Link to="/votes">Votes</Link>
          <Link to="/mps">MPs</Link>
        </div>
      </div>
    </Router>
  );
}
