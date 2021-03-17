import React from "react";
import "./ChartBar.scss";

export default function ChartBar() {
  return (
    <div className="chart-bar">
      <button className="selected">MP Vote</button>
      <button>User Vote</button>
      <button>Yes Votes by Party</button>
      <button>No Votes by Party</button>
    </div>
  )
};