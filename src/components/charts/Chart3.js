import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

export default function Chart3(props) {
  let yesVotes = {};
  for (const vote of props.voteInfo) {
    if (!Object.keys(yesVotes).includes(vote.party_name) && vote.voted_yea){
      yesVotes[vote.party_name] = 1;
    }
    else if (vote.voted_yea) {
      yesVotes[vote.party_name]++;
    }
  }
  const chart3Config = {
    type: 'pie',
    data: {
        labels: ['Liberal', 'Conservative', 'NDP', 'Bloc Quebecois', 'Green', 'Independent'],
        datasets: [{
            label: '# of Votes',
            data: [yesVotes.Liberal, yesVotes.Conservative, yesVotes.NDP, yesVotes["Bloc Québécois"], yesVotes["Green Party"], yesVotes.Independent],
            backgroundColor: [
                '#D7192066',
                '#1A478266',
                '#F3702166',
                '#33B2CC66',
                '#3D9B3566',
                '#C0C0C066'
            ],
            borderColor: [
              '#D71920',
              '#1A4782',
              '#F37021',
              '#33B2CC',
              '#3D9B35',
              '#C0C0C0'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: true
    },
      title: {
        display: true,
        text: '"Yes" Votes By Party'
      }
    }
  }
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chart3Config);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};