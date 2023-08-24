import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Home from "./Home";
import Footer from "./Footer";
import AllBhajans from "./AllBhajans";
// import uniqid from "uniqid";
// import { useCookies } from "react-cookie";
import Login from "./Login";

function App() {
  useEffect(() => {
    // eslint-disable-next-line
    checkAdmin();
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toLogin, setToLogin] = useState(false);
  const [isAllBhajans, setIsAllBhajans] = useState(false);
  // const [cookie, setCookie] = useCookies(["userSaved", "username", "password"]);
  // const [checkForCookies, setCheckForCookies] = useState(true);
  // const [User, setUser] = useState();

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
      {toLogin ? (
        <Login />
      ) : isLoggedIn ? (
        <Home />
      ) : isAllBhajans ? (
        <AllBhajans />
      ) : (
        <Main />
      )}
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
