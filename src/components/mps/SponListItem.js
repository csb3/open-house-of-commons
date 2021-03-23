import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import classnames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";
import Vote from '../Vote';

export default function SponListItem(props) {
  const motionClass = classnames("motion", {"agreed": props.result === "Agreed To", "negatived": props.result === "Negatived"});

  return (
    <Router forceRefresh={true}>
      <div className={motionClass}>
        <p>{props.summary}</p>
        <br />
        <Link to={`/votes/${props.id}`}>Vote No. {props.vote_num}</Link>
        {`\u00A0\u00A0\u00A0\u00A0`} 
        {props.result === "Agreed To" && <FontAwesomeIcon icon={faCheck} />}
        {props.nay === "Negatived" && <FontAwesomeIcon icon={faTimes} />}
      </div>
      <Switch>
        <Route path="votes/:id" component={Vote} />
      </Switch>
    </Router>
  )
}