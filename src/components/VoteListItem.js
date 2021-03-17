import classnames from 'classnames';

import './VoteListItem.scss';

export default function VoteListItem(props) {
  const result = props.result === 'Agreed To' ? '-agreedto' : '-negatived';
  const voteClass = classnames({
    [`vote-list-item__header${result}`]: true
  });

  return (
    <div
      data-testid="vote-list-item"
      className="vote-list-item"
      onClick={() => alert('vote clicked!')}
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