import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";
import classnames from "classnames";

export default function MpVoteListItem(props) {
  const mpVoteClass = classnames("mp-vote", {"nay": props.nay, "yea": props.yea})
  console.log("Props in VoteListItem: ", props);
  return (
    <div className={mpVoteClass}>
      {props.summary}
      <br />
      <br />
      <Link to={`/votes/${props.vote_num}`}>{`Vote No. ${props.vote_num}`}</Link>
      {`\u00A0\u00A0\u00A0\u00A0`} 
      {props.vote_paired && <FontAwesomeIcon icon={faEquals} />}
      {props.yea && <FontAwesomeIcon icon={faCheck} />}
      {props.nay && <FontAwesomeIcon icon={faTimes} />}
    </div>
  )
}