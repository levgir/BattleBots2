import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/bots">
        BattleBots
      </a>
      <a className="navbar-brand" href="/newmatch">
        New Match
      </a>
    </nav>
  );
}

export default Nav;
