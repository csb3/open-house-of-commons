import React, { useEffect } from "react";
import Chart from "chart.js";

import "./UserVoteSummary.scss";

export default function UserVoteSummary(props) {
  const userVotes = props.data.userVotes["0"];

  useEffect(() => {
    const ctx = document.getElementById("userSummaryChart");

    new Chart(ctx, {
      type: "pie",
      ticks: {
        min: 0
      },
      data: {
        labels: ["Yes", "No"],
        datasets: [
          {
            data: [userVotes.yesvotes, userVotes.novotes],
            backgroundColor: ["#A8DB9D", "#DAA79D"],
            borderColor: ["#2FAA1B", "#AA2F1B"],
            border: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "OHoC Users' Votes"
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
              let sum = Number(userVotes.yesvotes) + Number(userVotes.novotes);
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
      <canvas id="userSummaryChart" />
      <div class="user-vote-disclaimer">* Based on {Number(userVotes.yesvotes) + Number(userVotes.novotes)} OHoC users' votes.</div> 
    </div>
  );
}