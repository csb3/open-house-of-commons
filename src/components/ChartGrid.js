import React, { useEffect, useRef, useState } from 'react';
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";

export default function ChartGrid(props) {
  return (
    <div className="chart-grid">
      <div className="chart-grid--item"><Chart1 { ...props }/></div>
      <div className="chart-grid--item"><Chart2 {...props }/></div>
      <div className="chart-grid--item"><Chart3 {...props }/></div>
      <div className="chart-grid--item"><Chart4 {...props }/></div>
    </div>
  );
};