import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import useMpsData from '../../hooks/useMpsData';
import filterMps from '../../helpers/filterMps';
import MpList from './MpList';
import Mp from './Mp';
import PageList from './PageList';
import PartyButton from './PartyButton';
import './index.scss';

export default function Mps() {
  const {
    state,
    setParty,
    setPage,
    setSearch,
  } = useMpsData();

  const history = useHistory();

  const filteredMps = filterMps(state);
  const pages = Math.ceil(filteredMps.length / 12);
  const end = state.page * 12;
  const start = (end - 12);
  const mps = filteredMps.slice(start, end);
 
  return (
    <Router>
      <Switch>
        <Route path="/mps/:id" component={Mp} />
        <Route path="/mps">
          <section className="mps-main">
            <header className="vote-list__header">
              <h1 className="votes-header">Members of Parliament</h1>
              <h2 className="votes-sub-header">43rd Parliament, Session 2</h2>
            </header>

            <div className="mps-main__header">
              <div className="mps-main__search-bar">
                <form autoComplete="off" onSubmit={event => event.preventDefault()}>
                  <input
                    className="mps-main__search-bar-input"
                    name="keyword"
                    type="text"
                    value={state.search}
                    data-testid="mp-search-input"
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Search"
                  />
                </form>
              </div>
              <div className="mps-main__button">
                {state.parties.map(
                  party => party === state.party
                    ? <PartyButton key={party} selected party={party} onClick={() => setParty(party)}>{party}</PartyButton>
                    : <PartyButton key={party} party={party} onClick={() => setParty(party)}>{party}</PartyButton>
                )}
              </div>
            </div>
            <MpList
              mps={mps}
              history={history}
            />
            <footer className="mps-main__page">
              <PageList page={state.page} pages={pages} setPage={setPage} />
            </footer>
          </section>
        </Route>
      </Switch>
    </Router>
  );
}