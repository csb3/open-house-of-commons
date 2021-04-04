import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";
import Vote from '../Vote';

import "./MpVoteListItem.scss"

export default function MpVoteListItem(props) {
  return (
    <Router forceRefresh={true}>
      <div className="vote-list-container" onClick={props.linkTo}>
        <Link to={`/votes/${props.id}`} style={{ textDecoration: 'none' }}>
          <div className="vote-list-header">
            <div className="vote-list-title">{`Vote No. ${props.vote_num}`}</div>
          
            {props.vote_paired && <div class="vote-paired">Vote paired <FontAwesomeIcon icon={faEquals} /></div>}
            {props.yea && <div class="vote-agree">Voted yes <FontAwesomeIcon icon={faCheck} /></div>}
            {props.nay && <div class="vote-disagree">Voted no <FontAwesomeIcon icon={faTimes} /></div>}
          </div>
        
          <div className="vote-list-summary">{props.summary}</div>
        </Link>
      </div>

      <Switch>
        <Route path="/votes/:id" component={Vote} />
      </Switch>
    </Router>
  );
}