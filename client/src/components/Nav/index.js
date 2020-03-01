import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Battle Bots
      </a>
      <a className="navbar-brand" href="/addnewbot">
        New BattleBot
      </a>
      <a className="navbar-brand" href="/bots">
        The Competition
      </a>
      <a className="navbar-brand" href="/newmatch">
        New Match
      </a>
    </nav>
  );
}

export default Nav;
