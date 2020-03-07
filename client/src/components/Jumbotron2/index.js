import React from "react";
import "./style.css";

function Jumbotron2({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 200, textAlign: "center", marginBottom: 10 }}
      className="jumbotron jumbotron2"
    >
      {children}
    </div>
  );
}

export default Jumbotron2;