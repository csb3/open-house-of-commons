import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

const chart1Config = {
  type: 'pie',
  data: {
      labels: ['Yes', 'No'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19],
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      display: false
  },
  title: {
    display: true,
    text: "How MPs Voted"
  }
  }
}

export default function Chart1() {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chart1Config);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};