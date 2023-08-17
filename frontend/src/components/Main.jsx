import React from "react";
import Card from "./Card";

function Main() {
  function clicked() {
    alert("Clicked!!");
  }
  return (
    <div className="container">
      <div className="row m-0 main-container">
        <div className="col main-options">
          <Card title="Bhajans Sung" clicked={clicked} />
          <Card title="All Bhajans" clicked={clicked} />
          <Card title="I Dont know" clicked={clicked} />
        </div>
      </div>
    </div>
  );
}

export default Main;
