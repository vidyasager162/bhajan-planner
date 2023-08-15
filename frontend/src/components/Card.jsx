import React from "react";

function Card(props) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
}

export default Card;
