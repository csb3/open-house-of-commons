// This is the /vote/# information (left) container page.

import React from "react";

import OverviewInfo from "./OverviewInfo";

import "./../overview/index.scss";

export default function Overview(props) {
  return (
    <div>
      <h2>Overview</h2>

      <div class="overview-summary">
        2nd reading of Bill C-206, An Act to amend the Greenhouse Gas Pollution Pricing Act (qualifying farming fuel)
      </div>

      <div>
        <OverviewInfo />
      </div>
    </div>
  );
}