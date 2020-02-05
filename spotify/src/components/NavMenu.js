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
          <h1>Symphinity</h1>
          </div>
        </label>
        <ul className="menu">
         
          
            
          <li className="link">
            <NavLink  to="/">Home</NavLink>
          </li> 
          <li className="link">
          <NavLink  to="/dashboard" >
          Dashboard
        </NavLink>
        </li >
          <li className="link">
            <NavLink  to="/search">Search</NavLink>
          </li> 
          {/* TODO Need to get endpoint to Marketing page */}
          <li className="link">
            <NavLink  to="/" onClick={logOut}>
              Logout
            </NavLink>
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
