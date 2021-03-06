import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import classnames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faEquals,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";
import Vote from '../Vote';

export default function SponListItem(props) {
  return (
    <Router forceRefresh={true}>
      <Link to={`/votes/${props.id}`} style={{ textDecoration: 'none' }}>
        <div class="vote-list-container" onClick={props.linkTo}>
          <div class="vote-list-header">
            <div class="vote-list-title">{`Vote No. ${props.vote_num}`}</div>
          
            {props.result==="Negatived" && <div class="vote-disagree">Result: Negatived <FontAwesomeIcon icon={faTimes} /></div>}
            {props.result==="Agreed To" && <div class="vote-agree">Result: Agreed To <FontAwesomeIcon icon={faCheck} /></div>}
          </div>
        
          <div class="vote-list-summary">{props.summary}</div>
        </div>
      </Link>

      <Switch>
        <Route path="/votes/:id" component={Vote} />
      </Switch>
    </Router>
  );
}