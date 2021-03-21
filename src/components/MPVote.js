import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";import './MPVote.scss';
import classnames from "classnames";

export default function MPVote(props) {
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
  if (vote.voteInfo) {
    const mpSummary = vote.voteInfo.map(vote => {
      const newClass = classnames('mp-vote', vote.party_name.replace(/\s/g,''), {"yea": vote.voted_yea, "nay": vote.voted_nay, "paired": vote.vote_paired, "did-not-vote": !(vote.voted_nay || vote.voted_yea || vote.vote_paired)});
      return (<div className={newClass}>
        <div className="MP-info">
                <p>{`${vote.first_name} ${vote.last_name}`}</p>
        <p>{`${vote.name}`}</p>
        <p>{`${vote.party_name}`}</p>
        </div>
        </div>);
    });
    return (
      <section className="mp-vote-container">
      <h1>MP Vote Overview</h1>
      {mpSummary}
    </section>
  )
} else {
  return (
    <div>Loading...</div>
  )
}
}