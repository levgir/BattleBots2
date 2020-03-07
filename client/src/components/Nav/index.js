import React from "react";
import "./style.css";
import image from "../../utils/photos/brand.jpg";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/bots">
        <img src={image} width="40" height="40" alt=""></img>
      </a>
      <a className="navbar-brand" href="/newbot">
        BattleBots
      </a>
      <a className="navbar-brand" href="/newmatch">
        New Match
      </a>
    </nav>
  );
}

export default Nav;
