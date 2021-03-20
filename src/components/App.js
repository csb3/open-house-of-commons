// This is the / (home) page.
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from 'react-router-dom';

import Mps from "./mps/index";
import Votes from "./Votes";
import Nav from "./Nav";

//<Route path="/mp" component={MPs} />

const App = function() {
  const history = useHistory();
  const handleClick = (path) => history.push(path);

  return (
    <main>
      <Nav />
      <h2>React Router!</h2>
      <Router forceRefresh={true}>
        <Switch>
          <Route onClick={() => handleClick('/votes')} path="/votes" component={Votes}/>
          <Route onClick={() => handleClick('/mps')} path="/mps" component={Mps} />
          <Route onClick={() => handleClick('/')} path="/" exact/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
