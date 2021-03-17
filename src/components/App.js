// This is the / (home) page.

import Vote from "./../components/Vote";
import Nav from "./Nav";

const App = function() {
  return (
    <main>
      <Nav />
    
      <Vote />
    </main>
  );
}

export default App;