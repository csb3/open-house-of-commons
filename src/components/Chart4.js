import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';


export default function Chart4(props) {
  const noVotes = {};
  for (const vote of props.voteInfo) {
    if (!Object.keys(noVotes).includes(vote.party_name) && vote.voted_nay){
      noVotes[vote.party_name] = 1;
    }
    else if (vote.voted_nay) {
      noVotes[vote.party_name]++;
    }
  }
  const chart4Config = {
    type: 'pie',
    data: {
        labels: ['Liberal', 'Conservative', 'NDP', 'Bloc Quebecois', 'Green', 'Independent'],
        datasets: [{
            label: '# of Votes',
            data: [noVotes.Liberal, noVotes.Conservative, noVotes.NDP, noVotes["Bloc Québécois"], noVotes["Green Party"], noVotes.Independent],
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
        display: false
    },
      title: {
        display: true,
        text: '"No" Votes By Party'
      }
    }
  }
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