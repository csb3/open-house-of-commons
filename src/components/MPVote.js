import './MPVote.scss';
import classnames from "classnames";

export default function MPVote(props) {
  const mpSummary = props.voteInfo.map(vote => {
    const newClass = classnames('mp-vote', vote.party_name.replace(/\s/g,''), {"yea": vote.voted_yea, "nay": vote.voted_nay, "paired": vote.vote_paired, "did-not-vote": !(vote.voted_nay || vote.voted_yea || vote.vote_paired)});
    return (<div className={newClass}>
      </div>);
  });
  return (
    <section className="mp-vote-container">
      <h1>MP Vote Overview</h1>
      <br />
      {mpSummary}
    </section>
  )
}