const getChartParams = function(chartType, voteData) {
  const chartParams = {};
  if (chartType === '"Yes" Votes By Party' || chartType === '"No" Votes By Party') {
    chartParams.borderColors = [
                '#D71920',
                '#1A4782',
                '#F37021',
                '#33B2CC',
                '#3D9B35',
                '#C0C0C0'
    ]
    // returns muted versions of border colors for the background
    chartParams.backgroundColors = chartParams.borderColors.map(color => color + "66");
    chartParams.labels = ['Liberal', 'Conservative', 'NDP', 'Bloc Quebecois', 'Green', 'Independent'];
  } else if (chartType === "How MPs Voted" || chartType === "OHOC Users Voted") {
    chartParams.labels = ['Yes', 'No']
    chartParams.borderColors = [
      'rgba(153, 102, 255, 1)',
      'rgba(255, 206, 86, 1)',
    ]
    chartParams.backgroundColors = [
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 206, 86, 0.2)',
    ]
  }

  if (chartType === '"Yes" Votes By Party') {
    let yesVotes = {};
  for (const vote of voteData) {
  if (!Object.keys(yesVotes).includes(vote.party_name) && vote.voted_yea){
    yesVotes[vote.party_name] = 1;
  }
  else if (vote.voted_yea) {
    yesVotes[vote.party_name]++;
  }
  chartParams.data = [yesVotes.Liberal, yesVotes.Conservative, yesVotes.NDP, yesVotes["Bloc Québécois"], yesVotes["Green Party"], yesVotes.Independent];
}
  }
  if (chartType === '"No" Votes By Party') {
    let noVotes = {};
  for (const vote of voteData) {
  if (!Object.keys(noVotes).includes(vote.party_name) && vote.voted_nay){
    noVotes[vote.party_name] = 1;
  }
  else if (vote.voted_nay) {
    noVotes[vote.party_name]++;
  }
  chartParams.data = [noVotes.Liberal, noVotes.Conservative, noVotes.NDP, noVotes["Bloc Québécois"], noVotes["Green Party"], noVotes.Independent];
}
  }

  if (chartType === "How MPs Voted") {
    let yesVotes = 0;
    let noVotes = 0;
  
    for (const vote of voteData) {
      if (vote.voted_nay) {
        noVotes++;
      }
      if (vote.voted_yea) {
        yesVotes++;
      }
    }
    chartParams.data = [yesVotes, noVotes]
  }

  if (chartType === "OHOC Users Voted") {
    chartParams.data = [voteData.yesvotes, voteData.novotes];
  }

  
  const chartConfig = {
    type: 'pie',
    data: {
        labels: chartParams.labels,
        datasets: [{
            label: '# of Votes',
            data: chartParams.data,
            backgroundColor: chartParams.backgroundColors,
            borderColor: chartParams.borderColors,
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
    },
      title: {
        display: true,
        text: chartType
      }
    }
  }
  return chartConfig;
}
module.exports = getChartParams;