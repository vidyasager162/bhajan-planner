import React from "react";
import Card from "./Card";

function Main() {
  return (
    <div className="container-fluid">
      <div className="row main-container">
        <div className="col main-options">
          <Card title="Bhajans" />
        </div>
        <div className="col main-options">
          <Card title="Deities" />
        </div>
        <div className="col main-options">
          <Card title="I Dont know" />
        </div>
      </div>
    </div>
  );
}

export default Main;
