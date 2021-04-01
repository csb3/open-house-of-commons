// This is the /vote/# information (left) container page.

import React from "react";

import OverviewInfo from "./OverviewInfo";
import loading from "./../../../images/loading.gif"

import "./../overview/index.scss";

export default function Overview(props) {
  if (props.data && props.data.motionInfo) {
    const data = props.data.motionInfo["0"];
    
    return (
      <div>
        <h2>Overview</h2>
        <div className="overview-summary">{data.summary}</div>
  
        <div>
          <OverviewInfo data={props.data} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <img alt="loading" src={loading} width="20%" />
      </div>
    )
  }
}