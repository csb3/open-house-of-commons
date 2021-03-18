import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import './ChartGrid.scss';
const getChartParams = require('./chart-helper');

export default function Chart(props) {
  console.log("props in Chart", props);
  const chartConfig = getChartParams(props.chartType, props[props.dataType]);
  const chartContainer = useRef(null);

  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};