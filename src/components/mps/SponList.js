import SponListItem from './SponListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';

export default function SponList(props) {
  const votes = props.sponsored.map(spon =>
    <SponListItem
      key={spon.vote_num}
      id={spon.id}
      vote_num={spon.vote_num}
      summary={spon.summary}
      result={spon.result}
    />
  );

  const show = props.show ? votes : votes.slice(0, 5);

  return (
    <div>
      {!props.show && <FontAwesomeIcon onClick={props.showAll} icon={faChevronCircleDown} size={"2x"} />}
      {props.show && <FontAwesomeIcon onClick={props.showAll} icon={faChevronCircleUp} size={"2x"} />}
      <ul>{show}</ul>
    </div>
  );
}