import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bots from "./pages/Bots";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Bots} />
          <Route exact path="/bots" component={Bots} />
          <Route exact path="/bots/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
