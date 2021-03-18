import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';


export default function Chart1(props) {
  let yes_votes = 0;
  let no_votes = 0;
  console.log("props.voteInfo in chart1: ", props.voteInfo);

  console.log("Props in Chart1: ", props);
  let votes = [...props.voteInfo];
  console.log("votes: ", votes);
  console.log("votes[0]; ", votes[0]);
  for (const vote of props.voteInfo) {
    if (vote.voted_nay) {
      no_votes++;
    }
    if (vote.voted_yea) {
      yes_votes++;
    }
  }
  console.log("Yes votes: ", yes_votes);
  console.log("No votes: ", no_votes)
  const chart1Config = {
    type: 'pie',
    data: {
        labels: ['Yes', 'No'],
        datasets: [{
            label: '# of Votes',
            data: [yes_votes, no_votes],
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
}