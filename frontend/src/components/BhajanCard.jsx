import React from "react";

function BhajanCard(props) {
  return (
    <div className="card w-50 mx-auto bhajan-card">
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.sruthi}</p>
      </div>
    </div>
  );
}

export default BhajanCard;
