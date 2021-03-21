import MpVoteListItem from './MpVoteListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';

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

  const show = props.show ? votes : votes.slice(0, 5);

  return (
    <div>
      {!props.show && <FontAwesomeIcon onClick={() => props.showAll()} icon={faChevronCircleDown} size={"2x"} />}
      {props.show && <FontAwesomeIcon onClick={() => props.showAll()} icon={faChevronCircleUp} size={"2x"} />}
      <ul>{show}</ul>
    </div>
  );
}