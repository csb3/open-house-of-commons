import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import classnames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";

export default function SponListItem(props) {
  console.log("Props in sponlistitem: ", props);
  const motionClass = classnames("motion", {"agreed": props.result === "Agreed To", "negatived": props.result === "Negatived"});

  return (
    <div className={motionClass}>
      {props.key}
      <p>{props.summary}</p>
      <br />
      <Router forceRefresh>

      <Link to={`/votes/${props.vote_num}`}>Vote No. {props.vote_num}</Link>
      {`\u00A0\u00A0\u00A0\u00A0`} 
      {props.result === "Agreed To" && <FontAwesomeIcon icon={faCheck} />}
      {props.nay === "Negatived" && <FontAwesomeIcon icon={faTimes} />}
      </Router>
    </div>
  )
}