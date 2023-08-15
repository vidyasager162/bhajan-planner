import React from "react";
import Card from "./Card";

function Main() {
  function clicked() {
    alert("Clicked!!");
  }
  return (
    <div className="container">
      <div className="row main-container">
        <div className="col main-options">
          <Card title="Bhajans Sung" clicked={clicked} />
        </div>
        {/* <div className="col main-options">
          <Card title="Deities" clicked={clicked} />
        </div>
        <div className="col main-options">
          <Card title="I Dont know" clicked={clicked} />
        </div> */}
      </div>
    </div>
  );
}

export default Main;
