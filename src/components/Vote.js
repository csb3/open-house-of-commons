// This is the /vote/# page.

import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import Header from "./votes/Header";
import Overview from "./votes/overview/index";
import ChartGrid from "./../components/ChartGrid";
import './../components/Vote.scss';

export default function Vote(props) {
  const {id} = useParams(); // req.params.shortURL
  const [vote, setVote] = useState({});
  
  useEffect(() => {
    axios.get(`/api/votes/${id}`)
      .then(vote => {
        setVote(() => vote.data);
      })
  }, []);

  return (
    <div class="split-containers">
      <div class="vote-info-container">
        <Header />
        <Overview />
      </div>

      <div class="vote-charts-container">
        {vote.voteInfo && <ChartGrid {...vote}></ChartGrid>}
      </div>
    </div>
  );
}