import React, { useEffect } from "react";
import Chart from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function UserVoteSummary(props) {
  let mpYeaVotes = 0;
  let mpNayVotes = 0;
  for (const vote of props.data.voteInfo) {
    if (vote.voted_yea) {
      mpYeaVotes++;
    }
    if (vote.voted_nay) {
      mpNayVotes++;
    }
  }

  useEffect(() => {
    const ctx = document.getElementById("mpSummaryChart");
    new Chart(ctx, {
      type: "pie",
      ticks: {
        min: 0
      },
      data: {
        labels: ["Yes", "No"],
        datasets: [
          {
            data: [mpYeaVotes, mpNayVotes],
            backgroundColor: ["#A8DB9D", "#DAA79D"],
            borderColor: ["#2FAA1B", "#AA2F1B"],
            border: 1
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "MP Votes"
        },
        legend: {
          position: "bottom"
        },
        plugins: {
          datalabels: {
            display: function(context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value > 0;
            },
            formatter: (value) => {
              let sum = mpYeaVotes + mpNayVotes;
              let percentage = ((value / sum)*100).toFixed(1) + "%";
              return percentage;
            },
            color: '#4E4E4E',
          }
        }
      }         
    });
  });

  return (
    <div class="user-vote-chart-container">
      <canvas id="mpSummaryChart" width="20" />
    </div>
  );
}