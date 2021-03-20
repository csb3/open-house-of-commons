import React, { useEffect, useRef, useState } from 'react';
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart from "./Chart";

export default function ChartGrid(props) {
  const voteInformation = {...props};
  const charts = ["How MPs Voted", "User Votes", '"Yes" Votes By Party', '"No" Votes By Party'].map((type) => {
    console.log("Type: ", type);
    return (
    <Chart key={"Chart" + type} chartType={type} {...voteInformation}></Chart>
    );
  });
  console.log("Charts: ", charts);

  return (
    <div className="chart-grid">
      {charts}
    </div>
  );
};