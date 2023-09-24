import React, { useState, useEffect } from "react";

function AllBhajans() {
  const [bhajans, setBhajans] = useState();
  const [message, setMessage] = useState();
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
        setMessage(data.message);
      });
  }
  return message ? (
    <div className="container table-responsive p-5">
      <div className="row m-0 allbhajan-container">
        <table className="table table-light table-bordered m-auto">
          <thead>
            <tr style={{ fontSize: "1.5rem" }}>
              <th>Bhajan Name</th>
              <th>Sruthi</th>
            </tr>
          </thead>
          <tbody>
            {bhajans.map((bhajan) => {
              return (
                <tr>
                  <td style={{ fontWeight: "bold" }}>{bhajan.bhajan_name}</td>
                  <td style={{ fontWeight: "bold" }}>{bhajan.sruthi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
}

export default AllBhajans;
