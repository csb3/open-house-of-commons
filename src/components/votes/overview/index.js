// This is the /vote/# information (left) container page.

import React from "react";

import OverviewInfo from "./OverviewInfo";

import "./../overview/index.scss";

export default function Overview(props) {
  if (props.data) {
    const data = props.data.motionInfo["0"];
    
    return (
      <div>
        <h2>Overview</h2>
        <div class="overview-summary">{data.summary}</div>
  
        <div>
          <OverviewInfo data={props.data} />
        </div>
      </div>
    );
  } else {
    return (
      <div><h4>LOADING...</h4></div>
    )
  }
}