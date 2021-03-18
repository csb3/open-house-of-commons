// This is the / (home) page.
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Mps from "./Mps";
import Votes from "./../components/Votes";
import Nav from "./Nav";

//<Route path="/mp" component={MPs} />

const App = function() {
  return (
    <main>
      <Nav />
      <h2>React Router!</h2>
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/mps" component={Mps} />
          <Route path="/votes" component={Votes}/>
          <Route path="/" exact/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
