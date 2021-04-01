import classnames from 'classnames';
import { useHistory } from "react-router-dom";
import './VoteListItem.scss';

export default function VoteListItem(props) {
  const history = useHistory();
  const result = props.result === 'Agreed To' ? '-agreedto' : '-negatived';
  const voteClass = classnames({
    [`vote-list-item__header${result}`]: true
  });

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(props.date.toString());
  const dateStyled = date.toLocaleDateString(undefined, options);
  
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
        <div className="vote-list-item__date">{dateStyled}</div>
      </div>
      <div className="vote-list-item__desc">
        {props.summary.length > 90
           ? props.summary.slice(0, 89) + '...'
           : props.summary}
      </div>
    </div>
  );
}