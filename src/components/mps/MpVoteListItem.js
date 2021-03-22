import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";
import classnames from "classnames";
import Vote from '../Vote';

export default function MpVoteListItem(props) {
  const mpVoteClass = classnames("mp-vote", {"nay": props.nay, "yea": props.yea})
  return (
    <Router forceRefresh={true}>
      <div className={mpVoteClass} onClick={props.linkTo}>
        {props.summary}
        <br />
        <br />
        <Link to={`/votes/${props.id}`}>{`Vote No. ${props.vote_num}`}</Link>
        {`\u00A0\u00A0\u00A0\u00A0`} 
        {props.vote_paired && <FontAwesomeIcon icon={faEquals} />}
        {props.yea && <FontAwesomeIcon icon={faCheck} />}
        {props.nay && <FontAwesomeIcon icon={faTimes} />}
      </div>
      <Switch>
        <Route path="/votes/:id" component={Vote} />
      </Switch>
    </Router>
  );
}