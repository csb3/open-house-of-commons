import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
const chart4Config = {
  type: 'pie',
  data: {
      labels: ['Liberal', 'Conservative', 'NDP', 'Bloc Quebecois', 'Green'],
      datasets: [{
          label: '# of Votes',
          data: [5,10,2,1,1],
          backgroundColor: [
              '#D7192033',
              '#1A478233',
              '#F3702133',
              '#33B2CC33',
              '#3D9B3533',
          ],
          borderColor: [
            '#D71920',
            '#1A4782',
            '#F37021',
            '#33B2CC',
            '#3D9B35',
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
      text: '"No" Votes By Party'
    }
  }
}

export default function Chart4() {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chart4Config);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};