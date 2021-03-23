import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import classnames from "classnames";
import './ChartGrid.scss';
const getChartParams = require('../helpers/chart-helper');

export default function Chart(props) {
  
  const chartConfig = getChartParams({...props});
  const [chartInstance, setChartInstance] = useState(null);
  const chartContainer = useRef(null);
  const chartClassName = classnames("chart-grid--item", { "display": props.display})
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, props]);

  return (
    <div className={chartClassName}>
      <canvas ref={chartContainer} />
    </div>
  );
};