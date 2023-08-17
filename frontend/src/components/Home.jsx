import React from "react";
import Papa from "papaparse";

function Home() {
  let cohort = null;
  async function handleCohortSubmit(event) {
    let myPromise = new Promise(function (resolve) {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          cohort = results.data;
          resolve(cohort);
        },
      });
    });
    let payload = await myPromise;
    const reqPayload = {
      payload: payload,
    };
    fetch("http://127.0.0.1:8000/add-cohort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(reqPayload),
    });
  }
  return (
    <div className="container">
      <div className="row m-0 main-container">
        <div className="col main-options">
          <div className="form-signin w-100 m-auto container">
            <form>
              <div className="form-container">
                <div className="m-auto w-50">
                  <input
                    type="file"
                    className="form-control login-input"
                    name="file"
                    accept=".csv"
                    onChange={(e) => {
                      handleCohortSubmit(e);
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
