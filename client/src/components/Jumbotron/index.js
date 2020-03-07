import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 10, clear: "both", paddingTop: 10, textAlign: "center", color: "black" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
