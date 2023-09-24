import React from "react";

function Card(props) {
  return (
    <div
      className="card w-50 mx-auto"
      onClick={() => {
        props.clicked(true);
      }}
    >
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
}

export default Card;
