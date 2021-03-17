import VoteListItem from './VoteListItem';
import './Votes.scss';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Vote from './Vote';

const votes = [
  {
    id: 1,
    voteNum: 72,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-7',
    date: '2021-03-11 20:40:40',
    result: 'Agreed To',
    summary: 'Motion respecting Senate amendments to Bill C-7, An Act to amend the Criminal Code (medical assistance in dying)',
  },
  {
    id: 2,
    voteNum: 71,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-7',
    date: '2021-03-11 20:30:40',
    result: 'Negatived',
    summary: 'Motion respecting Senate amendments to Bill C-7, An Act to amend the Criminal Code (medical assistance in dying) (amendment)',
  },
  {
    id: 3,
    voteNum: 70,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-7',
    date: '2021-03-11 15:45:00',
    result: 'Agreed To',
    summary: 'Motion for closure',
  },
  {
    id: 4,
    voteNum: 69,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-18',
    date: '2021-03-10 15:50:00',
    result: 'Agreed To',
    summary: '3rd reading and adoption of Bill C-18, An Act to implement the Agreement on Trade Continuity between Canada and the United Kingdom of Great Britain and Northern Ireland',
  },
  {
    id: 5,
    voteNum: 68,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-216',
    date: '2021-03-10 15:40:00',
    result: 'Agreed To',
    summary: '2nd reading of Bill C-216, An Act to amend the Department of Foreign Affairs, Trade and Development Act (supply management)',
  }
];

export default function Votes() {

  return (
    <Router forceRefresh={true}>
      <section
        data-testid="vote-list"
        className="vote-list"
      >
        <header className="vote-list__heaader">
          <Link to="/votes/1"><h2>43rd Parliament, Session 2</h2></Link>
        </header>
        <article className="vote-list__main">
          {votes.map(vote => (
              <VoteListItem
                key={vote.id}
                voteNum={vote.voteNum}
                summary={vote.summary}
                billNum={vote.billNum}
                result={vote.result}
                date={vote.date}
              />
          ))}
        </article>
        <footer className="vote-list__footer">
          If you want to see all the votes in the past, visit <a href="https://www.ourcommons.ca/Members/en/votes">House of commons.</a>
        </footer>
      </section>
    <Switch>
      <Route path="/votes/1" component={Vote} />
      <Route path="/votes" exact />
    </Switch>
  </Router>
  )
}


{/* <Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/> */}