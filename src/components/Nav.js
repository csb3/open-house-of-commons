import React from 'react';
import PropTypes from 'prop-types';

import './nav.scss';

export default function Nav(props) {
  return (
  <div className="nav">
    <div className="nav--left">
      Open House of Commons
    </div>
    <div className="nav--right">
        <a href=''>Home</a>
        <a href=''>Votes</a>
        <a href=''>MPs</a>
    </div>
  </div>
  );
};