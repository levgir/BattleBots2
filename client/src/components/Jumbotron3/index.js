import React from "react";
// import "./style.css";

function Jumbotron3({ children }) {
  return (
    <div
      style={{ clear: "both", textAlign: "center", color: "black", marginTop:10, paddingTop:30, height:"300px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron3;
