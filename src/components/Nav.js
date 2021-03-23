import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from "axios";
import logo from './../images/logos/logo5.png';

import "./nav.scss";

export default function Nav(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['Email']);
  const login = () => {
    axios.get('/api/login/1')
      .then(res => {
        setCookie('Email', res.data[0].email, { path: '/' })
        setCookie('Id', res.data[0].id, { path: '/' })
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  const logout = () => {
    removeCookie('Email', {path: '/'});
    removeCookie('Id', {path: '/'});
    window.location.reload();
  }

  return (
      <Router forceRefresh={true}>
  <div className="nav">
    <div className="nav--left">
      <img
        src={logo}
        alt="Open House of Commons Logo"
        width="9%"
      />
      <Link to="/">Open House of Commons</Link>
    </div>

    <div className="nav--right">
       {cookies.Email &&  <span>{`Logged in as ${cookies.Email}`}</span>}
       {!cookies.Email && <Link to="/signup">Sign Up</Link>}
        <Link to="/">Home</Link>
        <Link to="/votes">Votes</Link>
        <Link to="/mps">MPs</Link>
        {!cookies.Email && <button className="nav--button" onClick={login}>Log In</button>}
        {cookies.Email && <button className="nav--button" onClick={logout}>Log Out</button>}
        
    </div>
  </div>
      </Router>
  );
}
