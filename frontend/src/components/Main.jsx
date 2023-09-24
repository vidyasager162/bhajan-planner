import React from "react";
import Card from "./Card";

function Main(props) {
  // function clicked(e) {
  //   console.log(e.target.innerText);
  // }
  return (
    <div className="container">
      <div className="row m-0 main-container">
        <div className="col">
          <Card title="Bhajans Sung" clicked={props.setIsBhajansSung} />
          <Card title="All Bhajans" clicked={props.setIsAllBhajans} />
        </div>
      </div>
    </div>
  );
}

export default Main;
