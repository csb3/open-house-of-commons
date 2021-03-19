const getChartParams = function (props) {
  const type = props.chartType;
  const chartParams = {};
  console.log("chart type: ", type);
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
      "Liberal",
      "Conservative",
      "NDP",
      "Bloc Québécois",
      "Green Party",
      "Independent"
    ];
  } else if (type === "How MPs Voted" || type === "OHOC Users Voted") {
    chartParams.labels = ["Yes", "No"];
    chartParams.borderColors = [
      "rgba(153, 102, 255, 1)",
      "rgba(255, 206, 86, 1)"
    ];
    chartParams.backgroundColors = [
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 206, 86, 0.2)"
    ];
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

  if (type === "OHOC Users Voted") {
    console.log("Props in OHOC Users Voted: ", props);
    chartParams.data = [
      props.userVotes[0].yesvotes,
      props.userVotes[0].novotes
    ];
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
        display: false
      },
      title: {
        display: true,
        text: type
      }
    }
  };
  return chartConfig;
};
module.exports = getChartParams;
