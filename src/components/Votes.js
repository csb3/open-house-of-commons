import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import VoteListItem from './VoteListItem';
import './Votes.scss';
import Vote from './Vote';

export default function Votes() {
  const [votes, setVotes] = useState([]);
  
  useEffect(() => {
    console.log('/api/votes reloaded')
    axios.get('/api/votes')
      .then(res => setVotes(() => [...res.data]));
  }, []);

  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/votes/:id" component={Vote} />
        <Route path="/votes">
        <section
          data-testid="vote-list"
          className="vote-list"
        >
          <header className="vote-list__heaader">
            <h2>43rd Parliament, Session 2</h2>
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
          <footer className="vote-list__footer">
            If you want to see all the votes in the past, visit <a href="https://www.ourcommons.ca/Members/en/votes">House of commons.</a>
          </footer>
        </section>
        </Route>
      </Switch>
    </Router>
  )
}