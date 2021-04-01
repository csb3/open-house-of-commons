import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import VoteListItem from './VoteListItem';
import Vote from './Vote';
import MPVote from './MPVote';

import './Votes.scss';

export default function Votes() {
  const [votes, setVotes] = useState([]);
  
  useEffect(() => {
    axios.get('/api/votes')
      .then(res => setVotes(() => [...res.data]));
  }, []);

  return (
    <Router forceRefresh={true}>
    <Switch>
      <Route path="/votes/:id/mp-overview" component={MPVote} />
      <Route path="/votes/:id" component={Vote} />
      <Route path="/votes">
        <section
          data-testid="vote-list"
          className="vote-list"
        >
          <header className="vote-list__header">
            <h1 className="votes-header">Votes</h1>
            <h2 className="votes-sub-header">43rd Parliament, Session 2</h2>
          </header>
          <article className="vote-list__main">
            {votes.map(vote => (
                <VoteListItem
                  key={vote.id}
                  id={vote.id}
                  voteNum={vote.vote_num}
                  summary={vote.summary}
                  billNum={vote.bill_num}
                  result={vote.result}
                  date={vote.date}
                />
            ))}
          </article>
        </section>
      </Route>
    </Switch>
  </Router>
  );
}