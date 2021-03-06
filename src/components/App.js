// This is the / (home) page.
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


import Mps from "./mps/index";
import Votes from "./Votes";
import Nav from "./Nav";
import Home from "./Home";

const App = function() {
  return (
    <main>
      <Nav />
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/mps" component={Mps} />
          <Route path="/votes" component={Votes}/>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
