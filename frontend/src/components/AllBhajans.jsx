import React, { useState, useEffect } from "react";
import BhajanCard from "./BhajanCard";

function AllBhajans() {
  const [bhajans, setBhajans] = useState();
  useEffect(() => {
    //eslint-disable-next-line
    getBhajans();
  }, []);

  function getBhajans() {
    console.log("Sending Request");
    fetch("http://127.0.0.1:8000/get-bhajans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setBhajans(data.bhajans);
      });
  }
  return (
    <div className="container">
      <div className="row m-0 main-container">
        {bhajans.map((bhajan) => {
          return (
            <div className="col main-options">
              <BhajanCard name={bhajan.bhajan_name} sruthi={bhajan.sruthi} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBhajans;
