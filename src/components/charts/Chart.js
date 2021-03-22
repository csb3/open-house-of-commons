import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import './ChartGrid.scss';
const getChartParams = require('../helpers/chart-helper');

export default function Chart(props) {
  const chartConfig = getChartParams({...props});
  const chartContainer = useRef(null);

  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, props]);

  return (
    <div className="chart-grid--item">
      <canvas ref={chartContainer} />
    </div>
  );
};