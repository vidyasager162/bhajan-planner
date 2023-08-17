import React, { useState } from "react";

function Footer(props) {
  const now = new Date().toLocaleTimeString();
  const nowRef = new Date().getHours();

  const [time, setTime] = useState(now);
  // eslint-disable-next-line
  const [refTime, setRefTime] = useState(nowRef);

  function updateTime() {
    const newRefTime = new Date().getHours();
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    setRefTime(newRefTime);
  }

  setInterval(updateTime, 1000);
  const day = new Date().toDateString();

  return (
    <footer>
      <p className="timeandday">
        {time}
        <span> </span>
        {day}
      </p>
      <p className="copyright">MDH &copy; 2023</p>
      {props.isLoggedIn ? (
        <button
          className="btn btn-lg btn-transparent drowpdown-toggle mb-8 p-0 logout-button"
          type="button"
          onClick={props.logOut}
        >
          Logout
        </button>
      ) : (
        <button
          className="btn btn-lg btn-transparent drowpdown-toggle mb-8 p-0 logout-button"
          type="button"
          onClick={props.logIn}
        >
          Login
        </button>
      )}
    </footer>
  );
}

export default Footer;
