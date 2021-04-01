import MpVoteListItem from './MpVoteListItem';

import "./MpVoteList.scss"

export default function MpVoteList(props) {
  const votes = props.votes.map(vote =>
    <MpVoteListItem
      key={vote.vote_num}
      id={vote.id}
      vote_num={vote.vote_num}
      yea={vote.voted_yea}
      nay={vote.voted_nay}
      paired={vote.vote_paired}
      summary={vote.summary}
    />
  );

  const show = props.show ? votes : votes.slice(0, 3);

  return (
    <div>
      <ul className="mp-votes-list">{show}</ul>
    </div>
  );
}