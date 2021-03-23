const getChartParams = function (props) {
  const type = props.chartType;
  const chartParams = {};
  if (type === "How MPs Voted") {
    let yesVotes = 0;
    let noVotes = 0;
  
    for (const vote of props.voteInfo) {
      if (vote.voted_nay) {
        noVotes++;
      }
      if (vote.voted_yea) {
        yesVotes++;
      }
    }
    chartParams.data = [yesVotes, noVotes];
  }
  
  if (type === "User Votes") {
    chartParams.data = [
      props.userVotes[0].yesvotes,
      props.userVotes[0].novotes
    ];
  }
  if (type === '"Yes" Votes By Party' || type === '"No" Votes By Party') {
    chartParams.borderColors = [
      "#D71920",
      "#1A4782",
      "#F37021",
      "#33B2CC",
      "#3D9B35",
      "#C0C0C0"
    ];
    // returns muted versions of border colors for the background
    chartParams.backgroundColors = chartParams.borderColors.map(
      (color) => color + "66"
    );
    chartParams.labels = [
      `Liberal`,
      `Conservative`,
      `NDP`,
      `Bloc Québécois`,
      `Green Party`,
      `Independent`
    ];
  } else if (type === "How MPs Voted" || type === "User Votes") {
    chartParams.labels = [`Yes`, `No`];
    chartParams.borderColors = [
      "#2FAA1B",
      "#AA2F1B"
    ];
    chartParams.backgroundColors = chartParams.borderColors.map(
      (color) => color + "66"
    );
  }

  if (type === '"Yes" Votes By Party') {
    let yesVotes = {};
    for (const label of chartParams.labels) {
      yesVotes[label] = 0;
    }
    for (const vote of props.voteInfo) {
      if (vote.voted_yea) {
        yesVotes[vote.party_name]++;
      }
    }
    chartParams.data = [
      yesVotes.Liberal,
      yesVotes.Conservative,
      yesVotes.NDP,
      yesVotes["Bloc Québécois"],
      yesVotes["Green Party"],
      yesVotes.Independent
    ];
  }
  if (type === '"No" Votes By Party') {
    let noVotes = {};
    for (const label of chartParams.labels) {
      noVotes[label] = 0;
    }

    for (const vote of props.voteInfo) {
      if (vote.voted_nay) {
        noVotes[vote.party_name]++;
      }
      chartParams.data = [
        noVotes.Liberal,
        noVotes.Conservative,
        noVotes.NDP,
        noVotes["Bloc Québécois"],
        noVotes["Green Party"],
        noVotes.Independent
      ];
    }
  }


  const chartConfig = {
    type: "pie",
    data: {
      labels: chartParams.labels,
      datasets: [
        {
          label: "# of Votes",
          data: chartParams.data,
          backgroundColor: chartParams.backgroundColors,
          borderColor: chartParams.borderColors,
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        display: props.display || false,
        position: "right"
      },
      title: {
        display: true,
        text: type
      },
      plugins: {
        datalabels: false
      }
    }
  };
  return chartConfig;
};
module.exports = getChartParams;
