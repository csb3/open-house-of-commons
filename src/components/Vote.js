// This is the /vote/# page.

import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";

import Header from "./votes/Header";
import Overview from "./votes/overview/index";
import ChartGrid from "./../components/charts/ChartGrid";
import ChartBar from "./../components/charts/ChartBar";
import Chart from "./../components/charts/Chart";
import YourMP from "./votes/YourMP";
import UserVote from "./UserVote";
import './../components/Vote.scss';

export default function Vote(props) {
  const {id} = useParams();
  const [vote, setVote] = useState({});
  const [cookies] = useCookies(['Id']);
  const userId = cookies.Id ? cookies.Id : null;
  const history = useHistory();
  
  useEffect(() => {
    axios.get(`/api/votes/${id}`, {params: {userId: userId}})
      .then(vote => {
        setVote(() => {
          return (
            { ...vote.data, chartView: "Overview", userView: false}
          );
        })
      })
  }, []);

  const setChartView = (view) => {
    setVote((vote) => {
      return {...vote, chartView: view}
    }
  )};

  const setDisplayView = (view) => {
    setVote(() => {
      return {...vote, userView: view}
    }
  )};
  const updateVote = (name) => {

    // if vote exists, delete it
    // if vote exists and name is Yes and voted_yea is true
    const params = {};
    if (vote.votes[0]) {
      params.userVoteId = vote.votes[0].id;
      // If The user has already voted No and clicks no it unselects it.
      if ((vote.votes[0].voted_nay && name !== "No") || (vote.votes[0].voted_yea && name !== "Yes")) {
        params.userId = cookies.Id;
        params.nay = name === "No" ? true : false;
        params.yea = name === "Yes" ? true : false;
      }
    } else {
      params.userId = cookies.Id;
      params.nay = name === "No" ? true : false;
      params.yea = name === "Yes" ? true : false;
    }
    console.log("Vote", vote);
    
    axios.post(`/api/votes/${vote.motionInfo[0].id}`, {...params})
      .then((res) => {
        setVote(() => {
          return {...vote, votes: res.data.votes, userVotes: res.data.userVotes}
        })
      })
      .catch(err => console.log(err))
    //if vote does not exist, add it with either 'yea' or nay'
  }

  return (
    <div class="split-containers">
      <div class="vote-info-container">
        <div class="vote-info-components">
          <Header data={vote} />
          <Overview data={vote} />
          <YourMP
            data={vote}
          />
        </div>
      </div>

      <div class="vote-charts-container">
        <ChartBar {...vote} onClick={setChartView}/>
          {vote.voteInfo && vote.chartView === "Overview" && <ChartGrid {...vote}></ChartGrid>}
          {vote.voteInfo && vote.chartView === "How MPs Voted" && <Chart {...vote} chartType="How MPs Voted" display="true"></Chart>}
          {vote.voteInfo && vote.chartView === "User Votes"  && <Chart {...vote} chartType="User Votes" display="true"></Chart>}
          {vote.voteInfo && vote.chartView === '"Yes" Votes By Party' && <Chart {...vote} chartType='"Yes" Votes By Party' display="true"></Chart>}
          {vote.voteInfo && vote.chartView === '"No" Votes By Party' && <Chart {...vote} chartType='"No" Votes By Party' display="true"></Chart>}

          <UserVote 
            {...vote} 
            updateVote={updateVote}
            displayOn = {() => setDisplayView(true)}
            displayOff = {() => setDisplayView(false)}
          />
      </div>
    </div>
  );
}