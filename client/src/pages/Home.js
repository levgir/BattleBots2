import React, { Component } from "react";

class Home extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
        <div>
          <h1> Bring us your bots, we'll beat them up! </h1>
        </div>
    );
  }
}

export default Home;