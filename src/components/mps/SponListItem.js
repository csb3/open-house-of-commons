import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import "./Mp.scss";
import Vote from '../Vote';

export default function SponListItem(props) {
  return (
    <Router forceRefresh={true}>
      <Link to={`/votes/${props.id}`} style={{ textDecoration: 'none' }}>
        <div className="vote-list-container" onClick={props.linkTo}>
          <div className="vote-list-header">
            <div className="vote-list-title">{`Vote No. ${props.vote_num}`}</div>
          
            {props.result==="Negatived" && <div className="vote-disagree">Result: Negatived <FontAwesomeIcon icon={faTimes} /></div>}
            {props.result==="Agreed To" && <div className="vote-agree">Result: Agreed To <FontAwesomeIcon icon={faCheck} /></div>}
          </div>
        
          <div className="vote-list-summary">{props.summary}</div>
        </div>
      </Link>

      <Switch>
        <Route path="/votes/:id" component={Vote} />
      </Switch>
    </Router>
  );
}