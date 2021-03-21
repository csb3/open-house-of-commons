import React, { useEffect, useRef, useState } from 'react';
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