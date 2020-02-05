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
      <header className="header">
        <NavLink to="/" className="logo">
          Symphinity
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/review">Review Stories</NavLink>
          </li>
          <li>
            <Link to="/" onClick={logOut}>
              Logout
            </Link>
          </li>
        </ul>
      </header>
    );
  } else {
    // Unauthenticated user
    // STRETCH: Add page to "Get Involved"
    return (
      <header className="header">
        <NavLink to="/" className="logo">
          Symphinity
        </NavLink>
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </header>
    );
  }
};

export default withRouter(NavMenu);
