import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import './nav.scss';

export default function Nav(props) {
  return (
  <div className="nav">
    <div className="nav--left">
      Open House of Commons
    </div>
    <div className="nav--right">
      <Router forceRefresh={true}>
        <Link to="/">Home</Link>
        <Link to="/votes">Votes</Link>
        <Link to="/">MPs</Link>
      </Router>
    </div>
  </div>
  );
};