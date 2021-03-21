// This is the /vote/# page.

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "./votes/Header";
import Overview from "./votes/overview/index";
import ChartGrid from "./../components/charts/ChartGrid";
import ChartBar from "./../components/charts/ChartBar";
import Chart from "./../components/charts/Chart";
import YourMP from "./votes/YourMP";
import './../components/Vote.scss';
import MPVote from './MPVote';

export default function Vote(props) {
  const {id} = useParams(); // req.params.shortURL
  const [vote, setVote] = useState({});
  
  useEffect(() => {
    axios.get(`/api/votes/${id}`)
      .then(vote => {
        setVote(() => {
          return (
            { ...vote.data, chartView: "Overview" });
      })
      })
  }, [id]);
  const setChartView = (view) => {setVote({...vote, chartView: view})};
  return (
    <div>

    <div class="split-containers">
      <div class="vote-info-container">
        <div class="vote-info-components">
          <Header data={vote} />
          <Overview data={vote} />
          <YourMP data={vote} />
        </div>
      </div>

      <div class="vote-charts-container">
        <ChartBar {...vote} onClick={setChartView}/>
        {vote.voteInfo && vote.chartView === "Overview" && <ChartGrid {...vote}></ChartGrid>}
        {vote.voteInfo && vote.chartView === "How MPs Voted" && <Chart {...vote} chartType="How MPs Voted" display="true"></Chart>}
        {vote.voteInfo && vote.chartView === "User Votes"  && <Chart {...vote} chartType="User Votes" display="true"></Chart>}
        {vote.voteInfo && vote.chartView === '"Yes" Votes By Party' && <Chart {...vote} chartType='"Yes" Votes By Party' display="true"></Chart>}
        {vote.voteInfo && vote.chartView === '"No" Votes By Party' && <Chart {...vote} chartType='"No" Votes By Party' display="true"></Chart>}
     </div>
    </div>
          </div>
  );
}