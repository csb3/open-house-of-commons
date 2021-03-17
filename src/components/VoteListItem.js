import classnames from 'classnames';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './VoteListItem.scss';
import Vote from './Vote';

export default function VoteListItem(props) {
  const history = useHistory();
  const result = props.result === 'Agreed To' ? '-agreedto' : '-negatived';
  const voteClass = classnames({
    [`vote-list-item__header${result}`]: true
  });
  console.log("!!!! Props ", props);
  
  const handleClick = () => history.push(`/votes/${props.id}`);

  return (
    <div
      data-testid="vote-list-item"
      className="vote-list-item"
      onClick={handleClick}
    >
      <header className={voteClass}>
        <h4>
          Vote No. {props.voteNum} / {props.billNum}
          <span>{props.result}</span>
        </h4>
      </header>
      <div className="vote-list-item__summary">
        <div className="vote-list-item__date">({props.date})</div>
        {props.summary}
      </div>
    </div>
  );
}