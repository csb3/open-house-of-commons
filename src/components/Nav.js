import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import logo from './../images/logos/logo5.png';

import './nav.scss';

export default function Nav(props) {
  return (
  <div className="nav">
    <div className="nav--left">
      <img
        src={logo}
        alt="Open House of Commons Logo"
        width="9%"
      />
      <div>Open House of Commons</div>
    </div>
    <div className="nav--right">
      <Router forceRefresh={true}>
        <Link to="/">Home</Link>
        <Link to="/votes">Votes</Link>
        <Link to="/mps">MPs</Link>
      </Router>
    </div>
  </div>
  );
};