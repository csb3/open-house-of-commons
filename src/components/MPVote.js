import './MPVote.scss';
import classnames from "classnames";

export default function MPVote(props) {
  const mpSummary = props.voteInfo.map(vote => {
    const newClass = classnames('mp-vote', {"yea": vote.voted_yea, "nay": vote.voted_nay, "paired": vote.vote_paired, "did-not-vote": !(vote.voted_nay || vote.voted_yea || vote.vote_paired)});
    return (<div className={newClass}>
      <p>{`${vote.first_name} ${vote.last_name}`}</p>
      <p>{`${vote.name}`}</p>
      <p>{`${vote.party_name}`}</p>
      </div>);
  });
  return (
    <div>
      <h1>MP Vote Overview</h1>
    <section className="mp-vote-container">
      <br />
      {mpSummary}
    </section>
    </div>
  )
}