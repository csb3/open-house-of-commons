import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';

export default function MpVoteListItem(props) {
  return (
    <div>
      {props.vote_num}
      {props.vote_paired && <FontAwesomeIcon icon={faEquals} />}
      {props.yea && <FontAwesomeIcon icon={faCheck} />}
      {props.nay && <FontAwesomeIcon icon={faTimes} />}
    </div>
  )
}