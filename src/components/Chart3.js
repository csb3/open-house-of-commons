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
        labels: ['Liberal', 'Conservative', 'NDP', 'Bloc Quebecois', 'Green'],
        datasets: [{
            label: '# of Votes',
            data: [yesVotes.Liberal, yesVotes.Conservative, yesVotes.NDP, yesVotes["Bloc Québécois"], yesVotes["Green Party"]],
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