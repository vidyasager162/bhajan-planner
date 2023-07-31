import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import uniqid from "uniqid";
import { useCookies } from "react-cookie";

function App() {
  useEffect(() => {
    // eslint-disable-next-line
    checkAdmin();
  }, []);

  function checkAdmin() {
    fetch("http://127.0.0.1:8000/check-admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
  }

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
