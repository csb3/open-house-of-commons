// This is the /vote/# page.

import React from "react";

import Header from "./votes/Header";
import Overview from "./votes/overview/index";

import './../components/Vote.scss';

export default function Vote(props) {
  return (
    <div class="split-containers">
      <div class="vote-info-container">
        <Header />
        <Overview />
      </div>

      <div class="vote-charts-container">
    
      </div>
    </div>
  );
}