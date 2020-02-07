import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";

// TODO Need to update the NavMenu to reflect the correct endpoints, and routing.

const NavMenu = props => {
  const logOut = () => {
    localStorage.clear();
    props.history.push("/");
  };

  if (localStorage.getItem("token")) {
    // We're logged in
    return (
      <header className="nav_bar">
        <label className="menu-icon" htmlFor="menu-btn">
          <div className="logo">
            <a
              className="anchor"
              rel="noopener noreferrer"
              href="https://symphinity-songsuggester.netlify.com/"
            >
              Symphinity
            </a>
          </div>
        </label>
        <ul className="menu">
          <li className="link">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="link">
            <NavLink to="/search">Search</NavLink>
          </li>
          <li className="link">
            <NavLink to="/testsearch">TestSearch</NavLink>
          </li>

          {/* TODO Need to get endpoint to Marketing page */}
          <li className="link">
            <a
              className="anchor"
              rel="noopener noreferrer"
              href="https://symphinity-songsuggester.netlify.com/"
            >
              Logout
            </a>
          </li>
        </ul>
      </header>
    );
  } else {
    // Unauthenticated user
    // STRETCH: Add page to "Get Involved"
    return (
      <header className="header">
        <a className="logo"
          rel="noopener noreferrer"
          href="https://symphinity-songsuggester.netlify.com/"
        >
          Symphinity
        </a>
      </header>
    );
  }
};

export default withRouter(NavMenu);
