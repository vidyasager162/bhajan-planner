import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="navbar-brand">Bhajan Planner MDH</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-transparent">
                Home
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
