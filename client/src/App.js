import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bots from "./pages/Bots";
import Detail from "./pages/Detail";
import NewMatch from "./pages/NewMatch";
import NoMatch from "./pages/NoMatch";
import NewBot from "./pages/NewBot";
import Fight from "./pages/Fight";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TopNav from "./components/TopNav";
import { Container } from 'reactstrap';
import UserProvider from "./context";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={() => <Auth action="login" />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/bots" component={Bots} />
          <Route exact path="/bots/:id" component={Detail} />
          <Route exact path="/newbot" component={NewBot} />
          <Route exact path="/newmatch" component={NewMatch} />
          <Route exact path="/fight" component={Fight} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
