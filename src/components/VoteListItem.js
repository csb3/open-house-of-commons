import React from 'react';
import '../styles/VoteListItem.scss';

export default function VoteListItem(props) {
  return (
    <article
      data-testid="vote-list-item"
      className="vote-list-item"
    >
      <header className="vote-list-item__header">
        <h4>Vote No. {props.voteNum} / {props.billNum}</h4>
      </header>
      <div className="vote-list-item__summary">
        {props.summary}
      </div>
      <footer className="vote-list-item__footer">
        ({props.date}) {props.result}
      </footer>
    </article>
  );
}